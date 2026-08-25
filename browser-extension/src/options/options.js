/**
 * Return the checkbox that toggles whether badge requests are sent.
 */
function badgeCheckbox() {
  return /** @type {HTMLInputElement} */ (document.getElementById('badge'));
}

function saveOptions() {
  chrome.storage.sync.set({
    badge: badgeCheckbox().checked,
  });
}

function loadOptions() {
  chrome.storage.sync.get(
    {
      badge: true,
    },
    items => {
      badgeCheckbox().checked = !!items.badge;
    },
  );
}

document.addEventListener('DOMContentLoaded', loadOptions);
badgeCheckbox().addEventListener('click', saveOptions);

/**
 * 数据源切换（本地模式 / 官方服务）。
 *
 * - 侧边栏 frame 与设置页同源，通过 localStorage['h-local.service'] 把选择
 *   传给客户端（见 client/src/sidebar/config/build-settings.ts）；
 * - 后台 Service Worker 无法读取 localStorage，通过 chrome.storage.sync 的
 *   serviceMode 同步（用于批注计数徽章等后台逻辑）。
 */
function serviceModeRadios() {
  return /** @type {HTMLInputElement[]} */ (
    Array.from(document.querySelectorAll('input[name="service-mode"]'))
  );
}

function saveServiceMode() {
  const selected = serviceModeRadios().find(radio => radio.checked);
  const mode = selected?.value === 'official' ? 'official' : 'local';

  if (mode === 'official') {
    localStorage.setItem('h-local.service', 'official');
  } else {
    localStorage.removeItem('h-local.service');
  }
  chrome.storage.sync.set({ serviceMode: mode });
}

function loadServiceMode() {
  const stored = localStorage.getItem('h-local.service');
  const mode = stored === 'official' ? 'official' : 'local';
  for (const radio of serviceModeRadios()) {
    radio.checked = radio.value === mode;
  }
}

document.addEventListener('DOMContentLoaded', loadServiceMode);
for (const radio of serviceModeRadios()) {
  radio.addEventListener('change', saveServiceMode);
}

/**
 * LAN sharing rescue controls.
 *
 * The sidebar switches to LAN mode when a server address is saved in
 * `localStorage` under `h-local.server`. If that server is no longer running
 * the sidebar fails to load; this lets the user clear the saved address
 * without DevTools.
 */
function initLanReset() {
  const status = /** @type {HTMLElement} */ (
    document.getElementById('lan-status')
  );
  const button = /** @type {HTMLButtonElement} */ (
    document.getElementById('lan-reset')
  );
  const done = /** @type {HTMLElement} */ (
    document.getElementById('lan-reset-done')
  );

  const saved = localStorage.getItem('h-local.server');
  if (saved) {
    status.textContent = `当前已保存局域网服务器地址：${saved}`;
    button.disabled = false;
  } else {
    status.textContent = '当前处于本地模式（未保存局域网服务器地址）。';
    button.disabled = true;
  }

  button.addEventListener('click', () => {
    localStorage.removeItem('h-local.server');
    done.hidden = false;
    status.textContent = '当前处于本地模式（未保存局域网服务器地址）。';
    button.disabled = true;
  });
}

document.addEventListener('DOMContentLoaded', initLanReset);
