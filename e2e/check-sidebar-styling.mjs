// Verify annotator shadow-root styles are restored (sidebar on the right,
// stylesheet actually loaded inside the shadow root, no cross-world warning).
import { chromium } from '../client/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { tmpdir } from 'node:os';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const extPath = path.join(root, 'dist', 'hypothesis-enhanced');

const browser = await chromium.launchPersistentContext(
  path.join(tmpdir(), 'edge-style-check-profile'),
  {
    channel: 'msedge',
    headless: false,
    viewport: { width: 1400, height: 900 },
    args: [
      `--disable-extensions-except=${extPath}`,
      `--load-extension=${extPath}`,
      '--no-first-run',
      '--no-default-browser-check',
    ],
  },
);
const context = browser;

let crossWorld = 0;
let extId = null;
browser.on('serviceworker', sw => {
  if (!extId) extId = sw.url().split('/')[2];
});

const page = await context.newPage();
const consoleMessages = [];
page.on('console', msg => consoleMessages.push(`[${msg.type()}] ${msg.text()}`));

// via link auto-opens the sidebar in our extension (same as user's repro path)
await page.goto(
  'https://hyp.is/go?url=https%3A%2F%2Fexample.com&group=__world__',
  { waitUntil: 'load', timeout: 30000 },
);
await page.waitForTimeout(6000);

const info = await page.evaluate(() => {
  const host = document.querySelector('hypothesis-sidebar');
  if (!host) return { found: false };
  const root = host.shadowRoot;
  const links = [...root.querySelectorAll('link')];
  const iframe = root.querySelector('iframe');
  let rect = null;
  if (iframe) {
    const r = iframe.getBoundingClientRect();
    rect = { left: Math.round(r.left), top: Math.round(r.top), width: Math.round(r.width), height: Math.round(r.height), vw: innerWidth, vh: innerHeight };
  }
  return {
    found: true,
    styleLinks: links.map(l => ({
      rel: l.rel,
      href: (l.href || '').split('/').slice(-2).join('/'),
      loaded: !!l.sheet,
    })),
    iframeRect: rect,
  };
});
console.log('sidebar:', JSON.stringify(info, null, 2));

crossWorld = consoleMessages.filter(m => m.includes('cross-world')).length;
console.log('cross-world warnings:', crossWorld);
console.log('errors:', consoleMessages.filter(m => m.startsWith('[error]')).slice(0, 5));

await page.screenshot({ path: path.join(process.env.TEMP || '/tmp', 'sidebar-styled-check.png') });
await browser.close();

// Assertions
const iframe = info.iframeRect;
const pass =
  info.found &&
  info.styleLinks.some(l => l.loaded) &&
  iframe &&
  iframe.left > iframe.vw * 0.5 &&
  iframe.height >= iframe.vh * 0.9 &&
  crossWorld === 0;
console.log(pass ? 'PASS' : 'FAIL');
process.exit(pass ? 0 : 1);
