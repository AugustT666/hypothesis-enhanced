/**
 * Quick check: load the extension, open the sidebar app.html directly,
 * and capture any console errors / page errors.
 *
 * Run: node e2e/check-sidebar.mjs
 */
import { chromium } from '../client/node_modules/playwright/index.mjs';
import { rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const EXT_DIR = resolve(import.meta.dirname, '../dist/hypothesis-enhanced');
const PROFILE = join(tmpdir(), 'edge-sidebar-check');

try {
  rmSync(PROFILE, { recursive: true, force: true });
} catch {}
mkdirSync(PROFILE, { recursive: true });

const log = (...a) => console.log('[check]', ...a);

const context = await chromium.launchPersistentContext(PROFILE, {
  channel: 'msedge',
  headless: true,
  args: [
    `--disable-extensions-except=${EXT_DIR}`,
    `--load-extension=${EXT_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
  ],
});

// Wait for the service worker to register and get the extension ID
let extensionId = null;
const swErrors = [];

context.on('serviceworker', async sw => {
  log('service worker:', sw.url().slice(0, 100));
  try {
    const cdp = await context.newCDPSession(sw);
    await cdp.send('Runtime.enable');
    cdp.on('Runtime.exceptionThrown', ev => {
      const d = ev.exceptionDetails;
      swErrors.push(`SW exception: ${d.text} ${d.exception?.description?.slice(0, 500) ?? ''}`);
    });
  } catch (e) {
    log('cdp attach failed:', e.message);
  }
});

// Give the SW time to start
await new Promise(r => setTimeout(r, 3000));

// Find the extension ID from the service worker URL
for (const sw of context.serviceWorkers()) {
  const match = sw.url().match(/chrome-extension:\/\/([^/]+)/);
  if (match) {
    extensionId = match[1];
    log('extension ID:', extensionId);
    break;
  }
}

if (!extensionId) {
  log('!! No service worker found, extension may have failed to load');
  // Try to read edge://extensions for errors
  const extPage = await context.newPage();
  await extPage.goto('edge://extensions', { waitUntil: 'domcontentloaded', timeout: 10000 });
  await extPage.waitForTimeout(2000);
  const text = await extPage.evaluate(() => document.body.innerText.slice(0, 2000));
  log('edge://extensions text:', text.slice(0, 500));
  await context.close();
  process.exit(1);
}

// Open the sidebar app.html directly
const sidebarUrl = `chrome-extension://${extensionId}/client/app.html`;
log('opening sidebar:', sidebarUrl);

const page = await context.newPage();
const consoleMessages = [];
const pageErrors = [];

page.on('console', m => {
  consoleMessages.push(`[${m.type()}] ${m.text().slice(0, 300)}`);
});
page.on('pageerror', e => {
  pageErrors.push(`PAGE ERROR: ${e.message.slice(0, 500)}`);
});

await page.goto(sidebarUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
await page.waitForTimeout(5000);

// Check if the sidebar rendered any HTML
const bodyHTML = await page.evaluate(() => {
  const app = document.querySelector('hypothesis-app');
  return {
    hasApp: !!app,
    appChildCount: app ? app.childElementCount : 0,
    bodyHTML: document.body.innerHTML.slice(0, 1000),
    title: document.title,
  };
});

log('sidebar body:', JSON.stringify(bodyHTML, null, 2));

// Check for any error panel
const errorPanel = await page.evaluate(() => {
  const el = document.querySelector('[data-testid="launch-error"], [class*="error"]');
  return el ? el.textContent.slice(0, 500) : null;
});
if (errorPanel) log('error panel:', errorPanel);

log('=== console messages ===');
consoleMessages.forEach(m => console.log(m));

log('=== page errors ===');
pageErrors.forEach(e => console.log(e));

log('=== SW errors ===');
swErrors.forEach(e => console.log(e));

// Take a screenshot
await page.screenshot({ path: join(tmpdir(), 'sidebar-check.png') }).catch(() => {});
log('screenshot:', join(tmpdir(), 'sidebar-check.png'));

await context.close();
process.exit(0);
