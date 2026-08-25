/**
 * Live-site smoke test: injects the Hypothesis Enhanced client into a real web page
 * (default: https://diidea.pku.edu.cn/competition2026/) and runs the
 * element-pick rect + pin flows against it, like the browser extension does.
 *
 * Prerequisite: the client has been built (`client/build/`).
 *
 * Run with: node e2e/live-site-test.mjs [url]
 */

import { chromium } from '../client/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, normalize, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const PORT = 9000;
const BASE = `http://127.0.0.1:${PORT}`;
const LIVE_URL =
  process.argv[2] ?? 'https://diidea.pku.edu.cn/competition2026/';

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
console.log(`Live page: ${LIVE_URL}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
page.on('console', msg => {
  if (msg.type() === 'error') {
    console.log('[console.error]', msg.text().slice(0, 200));
  }
});
page.on('pageerror', err => console.log('[pageerror]', err.message.slice(0, 200)));

const fail = msg => {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
};

const findSidebarFrame = async () => {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    const frame = page.frames().find(f => f.url().includes('/app.html'));
    if (frame) {
      return frame;
    }
    await page.waitForTimeout(200);
  }
  throw new Error('Sidebar frame not found');
};

const toolbarButton = testid =>
  page.locator('hypothesis-sidebar').locator(`[data-testid="${testid}"]`);

async function postAnnotation(sidebarFrame, text) {
  const editor = sidebarFrame.locator(
    '[data-testid="annotation-editor"] textarea',
  );
  await editor.waitFor({ timeout: 15000 });
  await editor.click();
  await editor.fill(text);
  await sidebarFrame.locator('[data-testid="publish-control-button"]').click();
}

try {
  await page.goto(LIVE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);

  // Inject the client, as the extension's content script does.
  await page.evaluate(BASE => {
    const config = document.createElement('script');
    config.className = 'js-hypothesis-config';
    config.type = 'application/json';
    config.textContent = JSON.stringify({
      openSidebar: false,
      appType: 'live-test',
      sidebarAppUrl: `${BASE}/app.html`,
      notebookAppUrl: `${BASE}/app.html`,
      profileAppUrl: `${BASE}/app.html`,
      assetRoot: `${BASE}/client/`,
    });
    document.head.appendChild(config);
  }, BASE);
  await page.addScriptTag({ url: `${BASE}/client/build/boot.js` });
  console.log('✓ Client injected into live page');

  await toolbarButton('rect-annotation').waitFor({ timeout: 30000 });
  console.log('✓ Toolbar visible on live page');

  const sidebarFrame = await findSidebarFrame();
  console.log('✓ Sidebar app frame loaded');

  // Find a target element: prefer a reasonably sized image; otherwise the
  // first large content block.
  const target = await page.evaluate(() => {
    const candidates = Array.from(
      document.querySelectorAll('img, picture, svg, canvas'),
    ).filter(el => {
      const r = el.getBoundingClientRect();
      return r.width > 120 && r.height > 60;
    });
    if (candidates.length > 0) {
      candidates.sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        return rb.width * rb.height - ra.width * ra.height;
      });
      const el = candidates[0];
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        x: r.x + r.width / 2,
        y: r.y + r.height / 2,
        width: r.width,
        height: r.height,
      };
    }
    // No images: use a paragraph or heading.
    for (const el of document.querySelectorAll('h1, h2, p, li, div.card')) {
      const r = el.getBoundingClientRect();
      if (r.width > 200 && r.height > 30 && r.top > 0) {
        return {
          tag: el.tagName,
          x: r.x + r.width / 2,
          y: r.y + r.height / 2,
          width: r.width,
          height: r.height,
        };
      }
    }
    return null;
  });
  if (!target) {
    throw new Error('No annotatable element found on the page');
  }
  console.log(`✓ Target element: <${target.tag}> at (${Math.round(target.x)}, ${Math.round(target.y)})`);

  const outline = page.locator('.h-local-element-picker');

  // ---- Pin flow: one click on the element. ----
  await toolbarButton('point-annotation').click();
  await outline.waitFor({ state: 'attached', timeout: 10000 });
  await page.mouse.move(target.x, target.y);
  await outline.waitFor({ state: 'visible', timeout: 5000 });
  console.log('✓ Picker outline highlights target on hover');
  await page.mouse.click(target.x, target.y);
  await postAnnotation(sidebarFrame, `pin 批注 @${new Date().toISOString().slice(11, 19)}`);
  console.log('✓ Pin annotation posted on live page');
  await page
    .locator('hypothesis-highlight.hypothesis-shape-highlight')
    .first()
    .waitFor({ timeout: 10000 });
  console.log('✓ Pin highlight rendered on live page');
  // Verify that picking the element (which may be a link) did not navigate.
  if (page.url() !== LIVE_URL) {
    fail(`Page navigated away during pin: ${page.url()}`);
  } else {
    console.log('✓ Pin on a link did not navigate the page');
  }

  // ---- Rect flow: free-form rectangle over the target element. ----
  await toolbarButton('rect-annotation').click();
  await page.locator('[data-testid="surface"]').waitFor({ timeout: 10000 });
  if ((await outline.count()) > 0) {
    fail('Element picker unexpectedly active for rectangle');
  }

  // Draw a rectangle over the target element.
  const rectStart = {
    x: target.x - target.width * 0.25,
    y: target.y - target.height * 0.25,
  };
  const rectEnd = {
    x: target.x + target.width * 0.25,
    y: target.y + target.height * 0.25,
  };
  await page.mouse.move(rectStart.x, rectStart.y);
  await page.mouse.down();
  await page.mouse.move(rectEnd.x, rectEnd.y, { steps: 8 });
  await page.mouse.up();
  await postAnnotation(
    sidebarFrame,
    `矩形批注 @${new Date().toISOString().slice(11, 19)}`,
  );
  console.log('✓ Rect annotation posted on live page');

  // Verify the rect region screenshot was captured and stored.
  const storedData = await sidebarFrame.evaluate(() => {
    const raw = localStorage.getItem('h-local.annotations.v1');
    return raw ? JSON.parse(raw) : [];
  });
  const rectAnnotation = storedData.find(a =>
    (a.text ?? '').includes('矩形批注 @'),
  );
  const screenshot = rectAnnotation?.extra?.screenshot;
  if (
    typeof screenshot !== 'string' ||
    !screenshot.startsWith('data:image/jpeg')
  ) {
    fail(`Rect annotation missing screenshot: ${String(screenshot).slice(0, 60)}`);
  } else {
    console.log(
      `✓ Rect region screenshot captured (${Math.round(screenshot.length / 1024)}KB)`,
    );
  }

  await page.waitForTimeout(1000);
  const rectHighlights = await page
    .locator('hypothesis-highlight.hypothesis-shape-highlight')
    .count();
  if (rectHighlights < 2) {
    fail(`Expected at least 2 shape highlights, found ${rectHighlights}`);
  } else {
    console.log(`✓ Rect highlight rendered on live page (${rectHighlights} highlights)`);
  }

  // ---- Reload and verify persistence + re-anchoring. ----
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  await page.evaluate(BASE => {
    if (!document.querySelector('script.js-hypothesis-config')) {
      const config = document.createElement('script');
      config.className = 'js-hypothesis-config';
      config.type = 'application/json';
      config.textContent = JSON.stringify({
        openSidebar: false,
        appType: 'live-test',
        sidebarAppUrl: `${BASE}/app.html`,
        notebookAppUrl: `${BASE}/app.html`,
        profileAppUrl: `${BASE}/app.html`,
        assetRoot: `${BASE}/client/`,
      });
      document.head.appendChild(config);
    }
  }, BASE);
  await page.addScriptTag({ url: `${BASE}/client/build/boot.js` });
  await page
    .locator('hypothesis-highlight.hypothesis-shape-highlight')
    .first()
    .waitFor({ timeout: 30000 });
  const restoredCount = await page
    .locator('hypothesis-highlight.hypothesis-shape-highlight')
    .count();
  if (restoredCount < 2) {
    fail(`Expected 2 restored highlights, found ${restoredCount}`);
  } else {
    console.log('✓ Pin + rect annotations restored and re-anchored after reload');
  }

  console.log('');
  console.log(process.exitCode ? 'LIVE TEST FAILED' : 'LIVE TEST PASSED');
} catch (err) {
  fail(err.message);
  console.log('');
  console.log('LIVE TEST FAILED');
} finally {
  await browser.close();
  server.close();
}
