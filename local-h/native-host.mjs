#!/usr/bin/env node
/**
 * Native messaging host for the Hypothesis Enhanced browser extension (Edge/Chrome).
 *
 * The extension launches this helper with one message per invocation and the
 * helper manages the LAN annotation server (`server.mjs`) as a detached
 * background process, so the room survives the helper itself exiting and
 * even the browser being closed.
 *
 * Wire protocol (standard native messaging):
 *   stdin  <- 4-byte little-endian length + UTF-8 JSON request
 *   stdout -> 4-byte little-endian length + UTF-8 JSON response
 *
 * Requests:
 *   {"action":"status"}                 -> {"status":"running","port":8123,
 *                                           "urls":["http://192.168.1.5:8123",...]}
 *                                          | {"status":"stopped"}
 *   {"action":"start","port":8123}      -> {"status":"started", ...urls}
 *                                          | {"status":"error","message":"..."}
 *   {"action":"stop"}                   -> {"status":"stopped"}
 */

import { spawn } from 'node:child_process';
import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import {
  arch,
  hostname,
  networkInterfaces,
  platform,
} from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA_DIR =
  process.env.H_LOCAL_DATA_DIR ??
  join(process.env.HOME ?? '', 'Library', 'Application Support', 'H Local');
const STATE_FILE = join(DATA_DIR, 'hlocal-server-state.json');
const LOG_FILE = join(DATA_DIR, 'native-host.log');
// server.mjs is installed next to this script.
const SERVER_SCRIPT = join(
  dirname(fileURLToPath(import.meta.url)),
  'server.mjs',
);

function log(line) {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    appendFileSync(
      LOG_FILE,
      `${new Date().toISOString()} ${line}\n`,
      'utf8',
    );
  } catch {
    // Logging is best-effort.
  }
}

/**
 * IPv4 addresses of all this machine's non-loopback interfaces, unfiltered:
 * any subnet (private, public, corporate, whatever the machine is on) is
 * shareable, so nothing is whitelisted. The only ordering rule is that the
 * Tailscale CGNAT range (100.64.0.0/10) sorts last, keeping local-network
 * links ahead of tailnet links in the UI.
 */
function lanURLs(port) {
  const tailscaleIPv4 = /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./;
  const localAddrs = [];
  const tailscaleAddrs = [];
  for (const ifaces of Object.values(networkInterfaces())) {
    for (const iface of ifaces ?? []) {
      if (iface.family !== 'IPv4' || iface.internal) {
        continue;
      }
      if (tailscaleIPv4.test(iface.address)) {
        tailscaleAddrs.push(iface.address);
      } else {
        localAddrs.push(iface.address);
      }
    }
  }
  const urls = [...localAddrs, ...tailscaleAddrs].map(
    addr => `http://${addr}:${port}`,
  );
  if (urls.length === 0) {
    urls.push(`http://127.0.0.1:${port}`);
  }
  return urls;
}

function readState() {
  try {
    return JSON.parse(readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return null;
  }
}

function isRunning(state) {
  if (!state?.pid) {
    return false;
  }
  try {
    process.kill(state.pid, 0);
    return true;
  } catch {
    return false;
  }

}

function serverHostInfo() {
  return {
    hostname: hostname(),
    platform: `${platform()} ${arch()}`,
  };
}

function respond(payload, onWritten = () => {}) {
  const body = Buffer.from(JSON.stringify(payload), 'utf8');
  const header = Buffer.alloc(4);
  header.writeUInt32LE(body.length, 0);
  process.stdout.write(Buffer.concat([header, body]), onWritten);
}

async function handleStart(request) {
  const port = Number(request.port) || 8123;

  const state = readState();
  if (isRunning(state)) {
    return {
    status: 'running',
    port: state.port,
    urls: lanURLs(state.port),
    ...serverHostInfo(),
  };
  }
  if (state) {
    rmSync(STATE_FILE, { force: true });
  }

  if (!existsSync(SERVER_SCRIPT)) {
    return {
      status: 'error',
      message: '服务器助手文件缺失，请重新安装本机助手',
    };
  }

  const dataFile = join(DATA_DIR, 'annotations.json');
  let child;
  try {
    child = spawn(
      process.execPath,
      [
        SERVER_SCRIPT,
        '--port',
        String(port),
        '--data',
        dataFile,
        '--host',
        '0.0.0.0',
      ],
      { detached: true, stdio: 'ignore' },
    );
  } catch (err) {
    return {
      status: 'error',
      message: `启动服务器失败：${err.message}`,
    };
  }

  // Attach the exit listener before waiting so a fast failure cannot be
  // missed. A quick exit usually means the port is taken or the server
  // failed to start.
  let exited = false;
  child.once('exit', () => {
    exited = true;
  });
  await new Promise(resolve => setTimeout(resolve, 400));
  if (exited || !isRunning({ pid: child.pid })) {
    return {
      status: 'error',
      message: `启动失败：端口 ${port} 可能已被占用`,
    };
  }
  child.unref();

  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(
    STATE_FILE,
    JSON.stringify({ pid: child.pid, port }, null, 2),
    'utf8',
  );

  return {
    status: 'started',
    port,
    urls: lanURLs(port),
    ...serverHostInfo(),
  };
}

async function handleStop() {
  const state = readState();
  if (state?.pid) {
    try {
      process.kill(state.pid, 'SIGTERM');
    } catch {
      // Already gone.
    }

    // Give the server a moment to flush its debounced data file before the
    // state file is removed and the response is sent.
    const deadline = Date.now() + 1000;
    while (isRunning(state) && Date.now() < deadline) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    rmSync(STATE_FILE, { force: true });
  }
  return { status: 'stopped' };
}

function handleStatus() {
  const state = readState();
  if (isRunning(state)) {
    return {
    status: 'running',
    port: state.port,
    urls: lanURLs(state.port),
    ...serverHostInfo(),
  };
  }
  return { status: 'stopped' };
}

async function handleMessage(request) {
  switch (request.action) {
    case 'start':
      return await handleStart(request);
    case 'stop':
      return handleStop();
    case 'status':
    default:
      return handleStatus();
  }
}

// Read one native-messaging request from stdin.
//
// Chrome/Edge keep the host's stdin pipe open while waiting for the reply, so
// we must process the request as soon as the 4-byte length + payload have
// arrived. Waiting for the 'end' event makes every `sendNativeMessage` call
// hang forever in the browser (the CLI test happened to work because it calls
// `child.stdin.end()`).
function readRequest() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let buffered = 0;
    let settled = false;

    const cleanup = () => {
      process.stdin.off('data', onData);
      process.stdin.off('end', onEnd);
      process.stdin.off('error', onError);
    };

    const finish = (error, value) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    };

    const onData = chunk => {
      chunks.push(chunk);
      buffered += chunk.length;

      if (buffered < 4) {
        return;
      }
      const buffer = Buffer.concat(chunks);
      const length = buffer.readUInt32LE(0);
      if (length > 10 * 1024 * 1024) {
        finish(new Error(`Oversized native-messaging request: ${length} bytes`));
        return;
      }
      if (buffered < 4 + length) {
        return;
      }
      finish(null, buffer.subarray(4, 4 + length));
    };

    const onEnd = () => {
      if (buffered >= 4) {
        const buffer = Buffer.concat(chunks);
        const length = buffer.readUInt32LE(0);
        if (buffered >= 4 + length) {
          finish(null, buffer.subarray(4, 4 + length));
          return;
        }
      }
      finish(new Error('Native-messaging request ended before it was complete'));
    };

    const onError = error => finish(error);

    process.stdin.on('data', onData);
    process.stdin.on('end', onEnd);
    process.stdin.on('error', onError);
  });
}

async function main() {
  let request = {};
  try {
    const payload = await readRequest();
    request = JSON.parse(payload.toString('utf8'));
  } catch (error) {
    // Tolerate malformed requests by answering with current status.
    log(`bad request (${error.message}); answering with status`);
  }

  log(`request ${JSON.stringify(request)}`);
  const response = await handleMessage(request);
  log(`response ${JSON.stringify(response)}`);
  // Wait until the response has been flushed to stdout, then exit. Chrome/Edge
  // close the channel once the reply is received, but exiting explicitly means
  // a half-open stdin pipe cannot keep this one-shot helper alive.
  respond(response, () => process.exit(0));
}

main();
