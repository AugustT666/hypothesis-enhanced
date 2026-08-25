/**
 * LAN collaboration end-to-end test.
 *
 * Two browser pages, both on the same URL, both connected to a local-h
 * server. An annotation created in one page must arrive in the other page's
 * sidebar in real time (via the WebSocket push), attributed to the creator's
 * IP address. The official client applies realtime updates via a
 * pending-updates notification banner.
 *
 * Prerequisites: client built, local-h/server.mjs available.
 * Run with: node e2e/lan-test.mjs
 */

import { chromium } from '../client/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, normalize, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = resolve(import.meta.dirname, '..');
const PORT = 9000;
const BASE = `http://127.0.0.1:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.map': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = createServer((req, res) => {
  const url = new URL(req.url, BASE);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) pathname += 'index.html';
  if (pathname === '/app.html') pathname = '/e2e/app.html';
  else if (pathname === '/app-lan.html') pathname = '/e2e/app-lan.html';
  else if (pathname === '/page.html') pathname = '/e2e/test-page.html';
  const file = resolve(ROOT, normalize(pathname).replace(/^[/\\]/, ''));
  if (!file.startsWith(ROOT) || !existsSync(file) || statSync(file).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': MIME[extname(file)] ?? 'application/octet-stream',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(readFileSync(file));
});
await new Promise(done => server.listen(PORT, done));
console.log(`Static server on ${BASE}`);

// Start local-h on a fresh data file.
const localH = spawn(
  'node',
  ['local-h/server.mjs', '--port', '8123', '--data', '/tmp/h-local-lan-test.json'],
  { cwd: ROOT, stdio: 'ignore' },
);
const cleanup = () => {
  localH.kill();
  server.close();
};
process.on('exit', cleanup);
await new Promise(r => setTimeout(r, 800));

const browser = await chromium.launch();

const openPeer = async label => {
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[${label} console.error]`, msg.text().slice(0, 200));
    }
  });
  page.on('pageerror', err =>
    console.log(`[${label} pageerror]`, err.message.slice(0, 200)),
  );
  await page.addInitScript(() => {
    localStorage.setItem(
      'h-local.sidebarApp',
      'http://127.0.0.1:9000/app-lan.html',
    );
  });
  await page.goto(`${BASE}/page.html`);
  const rectButton = page
    .locator('hypothesis-sidebar')
    .locator('[data-testid="rect-annotation"]');
  await rectButton.waitFor({ timeout: 30000 });
  const frame = page.frames().find(f => f.url().includes('/app-lan.html'));
  if (!frame) {
    throw new Error(`${label}: sidebar frame not found`);
  }
  return { page, frame };
};

const fail = msg => {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
};

try {
  const peerA = await openPeer('A');
  const peerB = await openPeer('B');
  console.log('✓ Both peers connected to local-h');

  // Wait for B's sidebar to load groups from the server.
  await peerB.frame.getByText('Public').first().waitFor({ timeout: 20000 });
  console.log('✓ Peer B sidebar loaded from LAN server');

  const noteText = `局域网协作测试 @${Date.now()}`;

  // Peer A creates a page note.
  await peerA.page
    .locator('hypothesis-sidebar')
    .locator('[data-testid="text-annotation"]')
    .click();
  const editor = peerA.frame.locator(
    '[data-testid="annotation-editor"] textarea',
  );
  await editor.waitFor({ timeout: 15000 });
  await editor.click();
  await editor.fill(noteText);
  await peerA.frame
    .locator('[data-testid="publish-control-button"]')
    .click();
  console.log('✓ Peer A created annotation');

  // The realtime update arrives in peer B's sidebar as a pending-updates
  // notification banner (official client behavior).
  const notifier = peerB.frame.locator('[data-testid="notification"]');
  await notifier.waitFor({ timeout: 15000 });
  console.log('✓ Peer B received the annotation in real time (WebSocket)');

  // Applying the pending updates shows the new annotation card.
  await notifier.click();
  await peerB.frame.getByText(noteText).first().waitFor({ timeout: 10000 });
  console.log('✓ Annotation card visible in peer B after applying updates');

  // The creator is identified by their IP address.
  const ipShown = await peerB.frame
    .getByText('127.0.0.1', { exact: true })
    .count()
    .catch(() => 0);
  if (ipShown === 0) {
    fail('Creator IP address not shown in peer B sidebar');
  } else {
    console.log('✓ Creator identified by IPv4 address in peer B');
  }

  // Deletion also propagates: A deletes the annotation, B loses it after
  // applying the pending deletion.
  const cardA = peerA.frame
    .locator('article')
    .filter({ hasText: noteText })
    .first();
  await cardA.locator('button[title="Delete"]').click();
  await peerA.frame.locator('[data-testid="confirm-button"]').click();
  await notifier.waitFor({ timeout: 15000 });
  await notifier.click();
  await peerB.frame
    .getByText(noteText)
    .first()
    .waitFor({ state: 'detached', timeout: 10000 });
  console.log('✓ Deletion propagated to peer B in real time');

  console.log('');
  console.log(process.exitCode ? 'LAN TEST FAILED' : 'LAN TEST PASSED');
} catch (err) {
  fail(err.message);
  console.log('');
  console.log('LAN TEST FAILED');
} finally {
  await browser.close();
  cleanup();
}
