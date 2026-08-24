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
