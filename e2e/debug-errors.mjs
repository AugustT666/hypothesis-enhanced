/**
 * Debug the extension freeze: load dist/ extension in a controlled Edge,
 * open the same hyp.is "via" link the user opened, and read both console
 * output and the edge://extensions errors page.
 *
 * Run: node e2e/debug-errors.mjs
 */
import { chromium } from '../client/node_modules/playwright/index.mjs';
import { rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const EXT_DIR = resolve(import.meta.dirname, '../dist/hypothesis-enhanced');
const PROFILE = join(tmpdir(), 'edge-debug-profile');
const EXT_ID = 'dkalhjjccanidolkanacbemiaiaaohef';
const VIA_URL =
  'https://hyp.is/go?url=https%3A%2F%2Fgithub.com%2FAugustT666%2Fhypothesis-enhanced&group=__world__';

try {
  rmSync(PROFILE, { recursive: true, force: true });
} catch {}
mkdirSync(PROFILE, { recursive: true });

const log = (...a) => console.log('[dbg]', ...a);

const context = await chromium.launchPersistentContext(PROFILE, {
  channel: 'msedge',
  headless: false,
  viewport: { width: 1400, height: 900 },
  args: [
    `--disable-extensions-except=${EXT_DIR}`,
    `--load-extension=${EXT_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
  ],
});

// ---- capture service worker console/errors via CDP ----
const swErrors = [];
context.on('serviceworker', async sw => {
  log('service worker started:', sw.url().slice(0, 80));
  try {
    const cdp = await context.newCDPSession(sw);
    await cdp.send('Runtime.enable');
    await cdp.send('Log.enable');
    cdp.on('Runtime.exceptionThrown', ev => {
      const d = ev.exceptionDetails;
      swErrors.push(
        `SW exception: ${d.text} ${d.exception?.description?.slice(0, 500) ?? ''}`,
      );
    });
    cdp.on('Log.entryAdded', ev => {
      const e = ev.entry;
      if (e.level === 'error' || e.level === 'warning') {
        swErrors.push(`SW log[${e.level}]: ${e.text} ${e.url ?? ''}`.slice(0, 400));
      }
    });
  } catch (e) {
    log('cdp attach failed:', e.message);
  }
});

// ---- open the via link (user's repro path) ----
const page = context.pages()[0] ?? (await context.newPage());
page.on('console', m => {
  if (m.type() === 'error' || m.type() === 'warning') {
    log('console:', m.type(), m.text().slice(0, 400));
  }
});
page.on('pageerror', e => log('pageerror:', e.message.slice(0, 400)));

log('opening via link …');
await page.goto(VIA_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

// wait for redirect to github and extension to activate
await page.waitForTimeout(15000);
log('current url:', page.url().slice(0, 100));

// is the page responsive at all?
try {
  const pong = await Promise.race([
    page.evaluate(() => 1 + 1),
    new Promise((_, rej) => setTimeout(() => rej(new Error('EVAL TIMEOUT — page frozen')), 8000)),
  ]);
  log('page responsive:', pong);
} catch (e) {
  log('!! PAGE FROZEN:', e.message);
}

// ---- read the errors page like the user would ----
const errPage = await context.newPage();
try {
  await errPage.goto(`edge://extensions/?errors=${EXT_ID}`, {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });
  await errPage.waitForTimeout(3000);
  const text = await errPage.evaluate(() => {
    // Chromium extensions page is shadow-DOM based; walk it
    const dig = root => {
      let out = '';
      const walk = node => {
        node.childNodes?.forEach(n => {
          if (n.nodeType === 3) out += n.textContent + '\n';
          walk(n);
        });
      };
      root.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) dig(el.shadowRoot);
        walk(el);
      });
      return out;
    };
    return dig(document);
  });
  const cleaned = text
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('--') && !l.startsWith(': ') && !/^[#.]/.test(l))
    .filter((l, i, arr) => l !== arr[i - 1])
    .join('\n');
  log('=== edge://extensions errors page ===');
  console.log(cleaned.slice(0, 4000));
} catch (e) {
  log('errors page read failed:', e.message);
}

log('=== SW captured', swErrors.length, 'entries ===');
swErrors.slice(0, 20).forEach(e => console.log(e));

await page.screenshot({ path: join(tmpdir(), 'freeze-repro.png') }).catch(() => {});
log('screenshot saved to', join(tmpdir(), 'freeze-repro.png'));

await context.close();
process.exit(0);
