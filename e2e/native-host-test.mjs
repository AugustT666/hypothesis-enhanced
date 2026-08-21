/**
 * Regression test for the native messaging host installed for the browser
 * extension (`~/Library/Application Support/H Local/native-host`).
 *
 * Frames requests exactly like Chrome/Edge native messaging does
 * (4-byte little-endian length prefix + JSON) and asserts a full
 * start -> status -> idempotent start -> stop -> status cycle.
 *
 * Run with: node e2e/native-host-test.mjs
 */
import { spawn } from 'node:child_process';
import { homedir } from 'node:os';
import { join } from 'node:path';

const WRAPPER = join(
  homedir(),
  'Library',
  'Application Support',
  'H Local',
  'native-host',
  'hlocal-server-wrapper',
);

let failures = 0;
const check = (name, cond) => {
  console.log(`${cond ? '✓' : '✗'} ${name}`);
  if (!cond) {
    failures += 1;
  }
};

function call(message) {
  return new Promise((resolve, reject) => {
    const child = spawn(WRAPPER, [], { stdio: ['pipe', 'pipe', 'inherit'] });
    const body = Buffer.from(JSON.stringify(message), 'utf8');
    const header = Buffer.alloc(4);
    header.writeUInt32LE(body.length, 0);
    const chunks = [];
    child.stdout.on('data', chunk => chunks.push(chunk));
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error('native host did not answer before stdin was closed'));
    }, 10000);
    child.on('close', () => {
      clearTimeout(timer);
      const buffer = Buffer.concat(chunks);
      if (buffer.length < 4) {
        reject(new Error('native host returned no response'));
        return;
      }
      const length = buffer.readUInt32LE(0);
      resolve(JSON.parse(buffer.subarray(4, 4 + length).toString('utf8')));
    });
    // Deliberately do not end stdin here. Chrome/Edge keep the native
    // messaging pipe open while waiting for the response, so the host must
    // reply as soon as the length-prefixed request has arrived.
    child.stdin.write(Buffer.concat([header, body]));
  });
}

// Start from a known state: any previous room is stopped first.
await call({ action: 'stop' });

const status0 = await call({ action: 'status' });
check('initial status is stopped', status0.status === 'stopped');

const started = await call({ action: 'start', port: 8123 });
check('start reports started', started.status === 'started');
check('start returns port', started.port === 8123);
check(
  'start returns at least one share URL',
  Array.isArray(started.urls) && started.urls.length > 0,
);

const status1 = await call({ action: 'status' });
check('status reports running after start', status1.status === 'running');

const startedAgain = await call({ action: 'start', port: 8123 });
check(
  'repeated start is idempotent (running)',
  startedAgain.status === 'running',
);

const api = await fetch(`${started.urls[0]}/api`).then(r => r.json());
check('server REST API responds', typeof api.total === 'number');

const stopped = await call({ action: 'stop' });
check('stop reports stopped', stopped.status === 'stopped');

const status2 = await call({ action: 'status' });
check('status reports stopped after stop', status2.status === 'stopped');

console.log('');
console.log(failures ? 'NATIVE HOST TEST FAILED' : 'NATIVE HOST TEST PASSED');
process.exit(failures ? 1 : 0);
