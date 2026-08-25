/**
 * Windows end-to-end test: spawns the installed wrapper exactly like
 * Edge/Chrome would, sends native-messaging frames over stdin, and checks
 * the responses on stdout. Verifies status -> start -> http -> stop.
 *
 * Usage: node test-native-host-win.mjs
 */
import { spawn } from 'node:child_process';

const WRAPPER = String.raw`C:\Users\August\AppData\Local\H Local\native-host\hlocal-host.cmd`;
const DATA_DIR = String.raw`C:\Users\August\AppData\Local\H Local`;

function frame(obj) {
  const body = Buffer.from(JSON.stringify(obj), 'utf8');
  const header = Buffer.alloc(4);
  header.writeUInt32LE(body.length, 0);
  return Buffer.concat([header, body]);
}

/** Send one request and wait for one framed response. */
function roundtrip(child, request, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let buffered = 0;
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`timeout waiting for response to ${JSON.stringify(request)}`));
    }, timeoutMs);

    const onData = chunk => {
      chunks.push(chunk);
      buffered += chunk.length;
      if (buffered < 4) return;
      const buffer = Buffer.concat(chunks);
      const length = buffer.readUInt32LE(0);
      if (buffered < 4 + length) return;
      cleanup();
      clearTimeout(timer);
      resolve(JSON.parse(buffer.subarray(4, 4 + length).toString('utf8')));
    };

    const onError = err => {
      cleanup();
      clearTimeout(timer);
      reject(err);
    };

    function cleanup() {
      child.stdout.off('data', onData);
      child.stdout.off('error', onError);
    }

    child.stdout.on('data', onData);
    child.stdout.on('error', onError);
    child.stdin.write(frame(request));
  });
}

async function main() {
  console.log('1. Spawning wrapper as the browser would:', WRAPPER);
  const child = spawn('cmd.exe', ['/c', WRAPPER], { stdio: ['pipe', 'pipe', 'pipe'] });
  child.stderr.on('data', d => process.stderr.write(`[host stderr] ${d}`));

  console.log('2. Sending {"action":"status"} ...');
  const status = await roundtrip(child, { action: 'status' });
  console.log('   status reply:', JSON.stringify(status));
  if (status.status !== 'stopped' && status.status !== 'running') {
    throw new Error(`unexpected status: ${JSON.stringify(status)}`);
  }

  console.log('3. Sending {"action":"start","port":8123} ...');
  const child2 = spawn('cmd.exe', ['/c', WRAPPER], { stdio: ['pipe', 'pipe', 'pipe'] });
  const started = await roundtrip(child2, { action: 'start', port: 8123 });
  console.log('   start reply:', JSON.stringify(started));
  if (started.status !== 'started' && started.status !== 'running') {
    throw new Error(`failed to start: ${JSON.stringify(started)}`);
  }

  console.log('4. Probing HTTP API on 127.0.0.1:8123 ...');
  const res = await fetch('http://127.0.0.1:8123/api');
  const api = await res.json();
  console.log('   /api reply total:', api.total, '| links:', !!api.links);
  if (typeof api.total !== 'number') throw new Error('/api not serving local-h data');

  console.log('5. Sending {"action":"stop"} ...');
  const child3 = spawn('cmd.exe', ['/c', WRAPPER], { stdio: ['pipe', 'pipe', 'pipe'] });
  const stopped = await roundtrip(child3, { action: 'stop' });
  console.log('   stop reply:', JSON.stringify(stopped));

  console.log('');
  console.log('NATIVE HOST TEST PASSED');
  process.exit(0);
}

main().catch(err => {
  console.error('NATIVE HOST TEST FAILED:', err.message);
  process.exit(1);
});
