/**
 * End-to-end test for the H Local fork:
 *
 * 1. Serves the built client + a test page with an image and text blocks.
 * 2. Loads the page in headless Chromium.
 * 3. Rect tool: draws two free-form rectangles, posts annotations (no login
 *    or backend required - data is stored in the client origin's
 *    localStorage), and verifies screenshots and overlapping element records.
 * 4. Pin tool: picks a paragraph element with a single click and posts a pin
 *    annotation.
 * 5. Verifies shape highlights appear at the right positions.
 * 6. Reloads the page and verifies annotations are restored from storage.
 *
 * Prerequisite: the client has been built (`client/build/`).
 *
 * Run with: node e2e/e2e-test.mjs
 */

import { chromium } from '../client/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const PORT = 9000;
const BASE = `http://127.0.0.1:${PORT}`;

// ---------------------------------------------------------------------------
// Static file server (serves the workspace so /client/build/* resolves).
// ---------------------------------------------------------------------------

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.map': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

const server = createServer((req, res) => {
  const url = new URL(req.url, BASE);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }
  // Map /app.html and /page.html to the e2e directory.
  if (pathname === '/app.html') {
    pathname = '/e2e/app.html';
  } else if (pathname === '/page.html') {
    pathname = '/e2e/test-page.html';
  }
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

// ---------------------------------------------------------------------------
// Browser automation
// ---------------------------------------------------------------------------

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
page.on('console', msg => {
  if (msg.type() === 'error' || msg.type() === 'warning') {
    console.log('[console]', msg.type(), msg.text().slice(0, 300));
  }
});
page.on('pageerror', err => console.log('[pageerror]', err.message.slice(0, 300)));

const fail = msg => {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
};

const findSidebarFrame = async () => {
  const deadline = Date.now() + 20000;
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

const shapeHighlights = () =>
  page.locator('hypothesis-highlight.hypothesis-shape-highlight');

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
  // test-page.html replaces its `SIDEBAR_APP` placeholder from this override.
  await page.addInitScript(override => {
    localStorage.setItem('h-local.sidebarApp', override);
  }, `${BASE}/app.html`);
  await page.goto(`${BASE}/page.html`);

  // Wait for the toolbar (in the <hypothesis-sidebar> shadow root) to appear.
  await toolbarButton('rect-annotation').waitFor({ timeout: 20000 });
  console.log('✓ Client booted in page, toolbar visible');

  const sidebarFrame = await findSidebarFrame();
  await sidebarFrame.waitForLoadState('load');
  console.log('✓ Sidebar app frame loaded');

  // Wait for the sidebar to load groups from local storage.
  await sidebarFrame.locator('[data-testid="top-bar"]').waitFor({ timeout: 20000 });
  await sidebarFrame.getByText('Public').first().waitFor({ timeout: 20000 });
  console.log('✓ Sidebar loaded groups (no login needed)');

  // ---------------------------------------------------------------------
  // Free-form rectangle over the image.
  // ---------------------------------------------------------------------
  const imgBox = await page.locator('#target-image').boundingBox();

  await toolbarButton('rect-annotation').click();
  console.log('✓ Rect tool activated (free-form document rectangle)');

  // Rectangles are free-form: no element picker appears.
  const outline = page.locator('.h-local-element-picker');
  await page.locator('[data-testid="surface"]').waitFor({ timeout: 5000 });
  if ((await outline.count()) > 0) {
    fail('Element picker unexpectedly active for rectangle');
  }
  console.log('✓ Drawing surface active');

  // Draw a rectangle over the right half of the image.
  const start = {
    x: imgBox.x + imgBox.width * 0.55,
    y: imgBox.y + imgBox.height * 0.3,
  };
  const end = {
    x: imgBox.x + imgBox.width * 0.95,
    y: imgBox.y + imgBox.height * 0.85,
  };
  await page.mouse.move(start.x, start.y);
  await page.mouse.down();
  await page.mouse.move(end.x, end.y, { steps: 10 });
  await page.mouse.up();
  console.log('✓ Rectangle drawn over image');

  await postAnnotation(sidebarFrame, '这是图片上的框选批注 e2e');
  console.log('✓ Rect annotation posted');

  // Verify a screenshot of the rect region was captured and stored, and that
  // the rectangle recorded the overlapping image element.
  const storedData = await sidebarFrame.evaluate(() => {
    const raw = localStorage.getItem('h-local.annotations.v1');
    return raw ? JSON.parse(raw) : [];
  });
  const rectAnnotation = storedData.find(a =>
    (a.text ?? '').includes('这是图片上的框选批注 e2e'),
  );
  const screenshot = rectAnnotation?.extra?.screenshot;
  if (typeof screenshot !== 'string' || !screenshot.startsWith('data:image/jpeg')) {
    fail(`Rect annotation missing screenshot: ${String(screenshot).slice(0, 60)}`);
  } else {
    console.log(`✓ Rect region screenshot captured (${Math.round(screenshot.length / 1024)}KB)`);
  }

  const rectSelectors = rectAnnotation?.target?.[0]?.selector ?? [];
  const rectShapeSelector = rectSelectors.find(
    selector => selector.type === 'ShapeSelector',
  );
  const imageElement = rectShapeSelector?.elements?.find(
    element => element.tagName === 'img',
  );
  if (!imageElement?.src?.startsWith('data:image/svg+xml')) {
    fail(`Rect missing overlapping image element: ${JSON.stringify(rectSelectors)}`);
  } else {
    console.log('✓ Rect records the overlapping image element');
  }

  // Verify the rect highlight appears over the image.
  const rectHighlight = shapeHighlights().first();
  await rectHighlight.waitFor({ timeout: 10000 });
  const hlBox = await rectHighlight.boundingBox();
  const overlaps =
    hlBox.x < imgBox.x + imgBox.width &&
    hlBox.x + hlBox.width > imgBox.x &&
    hlBox.y < imgBox.y + imgBox.height &&
    hlBox.y + hlBox.height > imgBox.y;
  if (!overlaps) {
    fail(`Rect highlight not positioned over the image: ${JSON.stringify(hlBox)}`);
  } else {
    console.log('✓ Rect highlight position overlaps the image');
  }

  // ---------------------------------------------------------------------
  // Second free-form rectangle across multiple elements.
  // ---------------------------------------------------------------------
  const imgWrapBox = await page.locator('#img-wrap').boundingBox();
  // Wait until the previous rect tool is no longer active, then activate it
  // again.
  await page.waitForFunction(() => {
    const host = document.querySelector('hypothesis-sidebar');
    const button = host?.shadowRoot?.querySelector(
      '[data-testid="rect-annotation"]',
    );
    return button === null || button.getAttribute('aria-pressed') !== 'true';
  }, { timeout: 5000 });
  await toolbarButton('rect-annotation').click();
  await page.locator('[data-testid="surface"]').waitFor({ timeout: 5000 });
  if ((await outline.count()) > 0) {
    fail('Element picker unexpectedly active for rectangle');
  }
  console.log('✓ Rect tool activated again');

  const freeStart = {
    x: imgWrapBox.x + 20,
    y: imgWrapBox.y + 20,
  };
  const freeEnd = {
    x: imgWrapBox.x + imgWrapBox.width - 20,
    y: imgWrapBox.y + imgWrapBox.height - 20,
  };
  await page.mouse.move(freeStart.x, freeStart.y);
  await page.mouse.down();
  await page.mouse.move(freeEnd.x, freeEnd.y, { steps: 10 });
  await page.mouse.up();
  console.log('✓ Free rectangle drawn across image and caption');

  await postAnnotation(sidebarFrame, '这是跨元素的通用矩形 e2e');
  console.log('✓ Free rect annotation posted');

  const storedAfterFreeRect = await sidebarFrame.evaluate(() => {
    const raw = localStorage.getItem('h-local.annotations.v1');
    return raw ? JSON.parse(raw) : [];
  });
  const freeRectAnnotation = storedAfterFreeRect.find(a =>
    (a.text ?? '').includes('这是跨元素的通用矩形 e2e'),
  );
  const freeSelectors = freeRectAnnotation?.target?.[0]?.selector ?? [];
  const shapeSelector = freeSelectors.find(
    selector => selector.type === 'ShapeSelector',
  );
  const hasElementSelector = freeSelectors.some(
    selector => selector.type === 'ElementSelector',
  );
  if (hasElementSelector) {
    fail('Free rect should not record a single selected element');
  }
  if (!Array.isArray(shapeSelector?.elements) || shapeSelector.elements.length < 2) {
    fail(`Free rect should record multiple overlapping elements: ${JSON.stringify(shapeSelector?.elements)}`);
  } else {
    console.log(`✓ Free rect records ${shapeSelector.elements.length} overlapping elements`);
  }

  // ---------------------------------------------------------------------
  // Pin annotation: one click on a paragraph element.
  // ---------------------------------------------------------------------
  const paragraphBox = await page.locator('#target-paragraph').boundingBox();
  const paragraphPoint = {
    x: paragraphBox.x + paragraphBox.width / 2,
    y: paragraphBox.y + paragraphBox.height / 2,
  };

  await toolbarButton('point-annotation').click();
  console.log('✓ Pin tool activated (element pick mode)');

  await outline.waitFor({ state: 'attached', timeout: 10000 });
  await page.mouse.move(paragraphPoint.x, paragraphPoint.y);
  await outline.waitFor({ state: 'visible', timeout: 5000 });
  await page.mouse.click(paragraphPoint.x, paragraphPoint.y);
  console.log('✓ Paragraph picked, pin placed with a single click');

  await postAnnotation(sidebarFrame, '这是段落上的 pin 批注 e2e');
  console.log('✓ Pin annotation posted');

  // The pin target is a link: verify that picking it did not navigate away.
  await page.waitForTimeout(1000);
  if (!page.url().includes('/page.html')) {
    fail(`Page navigated away during pin: ${page.url()}`);
  } else {
    console.log('✓ Pin on a link did not navigate the page');
  }

  // The pin renders as a small circular highlight over the paragraph.
  await page.waitForTimeout(1000);
  const pinHighlights = shapeHighlights();
  const pinCount = await pinHighlights.count();
  if (pinCount < 3) {
    fail(`Expected at least 3 shape highlights (2 rects + pin), found ${pinCount}`);
  } else {
    console.log(`✓ Pin highlight rendered (${pinCount} shape highlights total)`);
  }

  // ---------------------------------------------------------------------
  // Reload and verify all annotations are restored from storage.
  // ---------------------------------------------------------------------
  await page.reload();
  await toolbarButton('rect-annotation').waitFor({ timeout: 20000 });
  await shapeHighlights().first().waitFor({ timeout: 20000 });
  const restoredCount = await shapeHighlights().count();
  if (restoredCount < 3) {
    fail(`Expected 3 restored highlights, found ${restoredCount}`);
  } else {
    console.log('✓ Annotations restored after page reload (persisted + re-anchored)');
  }

  const sidebarFrame2 = await findSidebarFrame();
  // Wait for the annotations to be loaded and rendered in the sidebar.
  await sidebarFrame2
    .getByText('这是段落上的 pin 批注 e2e')
    .first()
    .waitFor({ timeout: 20000 });
  await sidebarFrame2
    .getByText('这是图片上的框选批注 e2e')
    .first()
    .waitFor({ timeout: 20000 });
  await sidebarFrame2
    .getByText('这是跨元素的通用矩形 e2e')
    .first()
    .waitFor({ timeout: 20000 });
  console.log('✓ Annotation texts visible in sidebar after reload');

  console.log('');
  console.log(process.exitCode ? 'E2E FAILED' : 'E2E PASSED');
} catch (err) {
  fail(err.message);
  console.log('');
  console.log('E2E FAILED');
} finally {
  await browser.close();
  server.close();
}
