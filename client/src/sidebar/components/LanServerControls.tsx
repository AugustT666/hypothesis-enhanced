import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export const LAN_SERVER_HOST_NAME = 'com.hlocal.server';
export const LAN_SERVER_DEFAULT_PORT = 8123;
export const LAN_SERVER_STORAGE_KEY = 'h-local.server';

export type HostStatus =
  | { kind: 'checking' }
  | { kind: 'stopped' }
  | { kind: 'running'; urls: string[]; port: number }
  | { kind: 'error'; message: string };

export type HostReply =
  | { ok: true; status: 'running' | 'started'; port: number; urls: string[] }
  | { ok: true; status: 'stopped' }
  | { ok: false; message: string };

type NativeMessage =
  | { action: 'status' }
  | { action: 'start'; port: number }
  | { action: 'stop' };

/** Read the LAN server URL saved by the "局域网服务器" dialog. */
export function getLanServerURL(window_: Window = window): string {
  return window_.localStorage?.getItem?.(LAN_SERVER_STORAGE_KEY) ?? '';
}

/** Persist a LAN server URL. An empty string removes the saved value. */
export function setLanServerURL(
  serverURL: string,
  window_: Window = window,
): void {
  if (serverURL) {
    window_.localStorage?.setItem?.(LAN_SERVER_STORAGE_KEY, serverURL);
  } else {
    window_.localStorage?.removeItem?.(LAN_SERVER_STORAGE_KEY);
  }
}

/**
 * Reload the page after the LAN server address has changed.
 *
 * Reloading only the sidebar iframe is not enough: the host page's
 * `PortProvider` allows a sidebar to connect only once per page load, so a
 * sidebar-only reload is rejected with "Received duplicate port request" and
 * the sidebar shows "Failed to connect the web page". Instead, when running in
 * the extension, ask the `tabs` API to reload the whole tab. The host page and
 * sidebar iframe then start over together and the connection is recreated
 * cleanly. Outside the extension (eg. e2e pages) fall back to a window reload.
 */
export function reloadSidebar(window_: Window = window): void {
  const chromeAPI = (window_ as unknown as { chrome?: any }).chrome;
  const tabs = chromeAPI?.tabs;

  if (tabs?.query && tabs?.reload) {
    try {
      tabs.query({ active: true, currentWindow: true }, (found: unknown) => {
        const tabId = (found as Array<{ id?: number }> | undefined)?.[0]?.id;
        if (tabId !== undefined) {
          tabs.reload(tabId);
        } else {
          window_.location.reload();
        }
      });
      return;
    } catch {
      // Fall through to the sidebar-only reload below.
    }
  }

  window_.location.reload();
}

/**
 * Normalize a user-entered LAN address to a root URL such as
 * `http://192.168.1.10:8123`.
 */
export function normalizeLanServerURL(serverURL: string): string {
  let normalized = serverURL.trim().replace(/\/+$/, '');
  if (!normalized) {
    return '';
  }
  if (!/^https?:\/\//.test(normalized)) {
    normalized = `http://${normalized}`;
  }
  return normalized.replace(/\/api\/?$/, '');
}

/** Return true if `serverURL` points at this machine. */
export function isLoopbackLanServerURL(serverURL: string): boolean {
  try {
    const { hostname } = new URL(serverURL);
    return (
      hostname === '127.0.0.1' || hostname === 'localhost' || hostname === '::1'
    );
  } catch {
    return /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:\d+)?/i.test(serverURL);
  }
}

/** Return the command users can run to install the native messaging host. */
export function getNativeHostInstallCommand(): string | null {
  const chromeAPI = (window as unknown as { chrome?: any }).chrome;
  const extensionId = chromeAPI?.runtime?.id;
  if (!extensionId) {
    return null;
  }
  return `./local-h/install-native-host.sh ${extensionId}`;
}

function describeNativeHostError(error: string | undefined): string {
  const message = error ?? '';
  if (message.includes('not found')) {
    return '未找到本机服务器助手。请先安装 local-h 本机助手，并完全重启浏览器后再试。';
  }
  if (message.includes('forbidden')) {
    return '本机服务器助手拒绝了扩展连接。请更新 Native Messaging 清单中的扩展 ID，并完全重启浏览器。';
  }
  if (message.includes('Failed to start')) {
    return '本机服务器助手启动失败，请确认 node 已安装且路径可执行。';
  }
  return `本机服务器助手调用失败：${message || '未知错误'}`;
}

function parseHostResponse(response: unknown): HostReply {
  const result = (response ?? {}) as Record<string, unknown>;
  const status = typeof result.status === 'string' ? result.status : '';
  const port =
    typeof result.port === 'number' ? result.port : LAN_SERVER_DEFAULT_PORT;
  const urls = Array.isArray(result.urls)
    ? result.urls.filter((url): url is string => typeof url === 'string')
    : [];

  if (status === 'started' || status === 'running') {
    return {
      ok: true,
      status,
      port,
      urls,
    };
  }
  if (status === 'stopped') {
    return { ok: true, status: 'stopped' };
  }
  if (status === 'error') {
    return {
      ok: false,
      message:
        typeof result.message === 'string'
          ? result.message
          : '启动失败，请查看本机助手日志。',
    };
  }
  return {
    ok: false,
    message: '本机服务器助手返回了无法识别的响应，请重新安装助手。',
  };
}

/**
 * Promise wrapper around `chrome.runtime.sendNativeMessage`.
 *
 * Returns `null` when the native messaging API is unavailable (for example in
 * an e2e page that loads the client outside the extension).
 */
export function sendHostMessage(
  message: NativeMessage,
): Promise<HostReply> | null {
  const chromeAPI = (window as unknown as { chrome?: any }).chrome;
  const sendNativeMessage = chromeAPI?.runtime?.sendNativeMessage;
  if (typeof sendNativeMessage !== 'function') {
    return null;
  }

  return new Promise(resolve => {
    let settled = false;
    const timer = setTimeout(() => {
      finish({
        ok: false,
        message: '本机服务器助手响应超时，请确认助手已安装且浏览器已完全重启。',
      });
    }, 10000);

    const finish = (reply: HostReply) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timer);
      resolve(reply);
    };

    try {
      sendNativeMessage(LAN_SERVER_HOST_NAME, message, (response: unknown) => {
        const lastError = chromeAPI.runtime.lastError;
        if (lastError) {
          finish({
            ok: false,
            message: describeNativeHostError(lastError.message),
          });
          return;
        }
        finish(parseHostResponse(response));
      });
    } catch {
      finish({
        ok: false,
        message: '调用本机服务器助手失败，请重新加载扩展后再试。',
      });
    }
  });
}

/**
 * Track the native helper which hosts the LAN annotation server.
 *
 * When `active` is true and `autoCheck` is enabled, the helper status is
 * refreshed automatically.
 */
export function useLanServerHost(
  active: boolean,
  { autoCheck = true }: { autoCheck?: boolean } = {},
) {
  const [host, setHost] = useState<HostStatus>({ kind: 'checking' });
  const mounted = useRef(true);
  const latestRequest = useRef(0);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const updateHost = useCallback((requestId: number, status: HostStatus) => {
    if (mounted.current && requestId === latestRequest.current) {
      setHost(status);
    }
  }, []);

  const checkHost = useCallback(async (): Promise<HostReply | null> => {
    const requestId = ++latestRequest.current;
    updateHost(requestId, { kind: 'checking' });

    const call = sendHostMessage({ action: 'status' });
    if (!call) {
      updateHost(requestId, {
        kind: 'error',
        message: '需要以浏览器扩展方式运行才能启动房间。',
      });
      return null;
    }

    const reply = await call;
    if (
      reply.ok &&
      (reply.status === 'running' || reply.status === 'started')
    ) {
      updateHost(requestId, {
        kind: 'running',
        urls: reply.urls,
        port: reply.port,
      });
    } else if (reply.ok) {
      updateHost(requestId, { kind: 'stopped' });
    } else {
      updateHost(requestId, { kind: 'error', message: reply.message });
    }
    return reply;
  }, [updateHost]);

  const startHost = useCallback(async (): Promise<HostReply | null> => {
    const requestId = ++latestRequest.current;
    updateHost(requestId, { kind: 'checking' });

    const call = sendHostMessage({
      action: 'start',
      port: LAN_SERVER_DEFAULT_PORT,
    });
    if (!call) {
      updateHost(requestId, {
        kind: 'error',
        message: '需要以浏览器扩展方式运行才能启动房间。',
      });
      return null;
    }

    const reply = await call;
    if (
      reply.ok &&
      (reply.status === 'running' || reply.status === 'started')
    ) {
      updateHost(requestId, {
        kind: 'running',
        urls: reply.urls,
        port: reply.port,
      });
    } else if (reply.ok) {
      updateHost(requestId, { kind: 'stopped' });
    } else {
      updateHost(requestId, { kind: 'error', message: reply.message });
    }
    return reply;
  }, [updateHost]);

  const stopHost = useCallback(async (): Promise<HostReply | null> => {
    const requestId = ++latestRequest.current;
    updateHost(requestId, { kind: 'checking' });

    const call = sendHostMessage({ action: 'stop' });
    if (!call) {
      updateHost(requestId, {
        kind: 'error',
        message: '需要以浏览器扩展方式运行才能停止房间。',
      });
      return null;
    }

    const reply = await call;
    if (reply.ok) {
      updateHost(requestId, { kind: 'stopped' });
    } else {
      updateHost(requestId, { kind: 'error', message: reply.message });
    }
    return reply;
  }, [updateHost]);

  useEffect(() => {
    if (active && autoCheck) {
      void checkHost();
    }
  }, [active, autoCheck, checkHost]);

  return { host, checkHost, startHost, stopHost };
}

export type LanServerControlsProps = {
  /** Current native-helper status. */
  host: HostStatus;

  /** URL currently saved in `h-local.server`. */
  savedServerURL: string;

  /** Save a URL and reconnect the sidebar to it. */
  onSave: (serverURL: string) => void;

  /** Start the bundled local-h server on this machine. */
  onStart: () => void;

  /** Label for the start button. Defaults to "启动房间". */
  startLabel?: string;

  /** Stop the local-h server running on this machine. */
  onStop: () => void;

  /** Optional close/cancel button, shown next to "保存并重连". */
  onCancel?: () => void;

  /** Called after a copy-to-clipboard attempt. */
  onCopy?: (url: string, ok: boolean) => void;
};

/**
 * Inline controls for the LAN annotation room.
 *
 * This is used by both the user-menu modal and the Share panel. The official
 * public (hyp.is) sharing UI is not used in this fork.
 */
export default function LanServerControls({
  host,
  savedServerURL,
  onSave,
  onStart,
  onStop,
  onCancel,
  onCopy,
  startLabel = '启动房间',
}: LanServerControlsProps) {
  const [value, setValue] = useState(savedServerURL);
  const [installCommandCopied, setInstallCommandCopied] = useState(false);

  useEffect(() => {
    setValue(savedServerURL);
  }, [savedServerURL]);

  const copyInstallCommand = useCallback(() => {
    const command = getNativeHostInstallCommand();
    if (!command) {
      return;
    }
    navigator.clipboard?.writeText(command).then(
      () => setInstallCommandCopied(true),
      () => setInstallCommandCopied(false),
    );
  }, []);

  const copyLink = useCallback(
    (url: string) => {
      const done = (ok: boolean) => onCopy?.(url, ok);
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(url).then(
          () => done(true),
          () => done(false),
        );
      } else {
        done(false);
      }
    },
    [onCopy],
  );

  return (
    <div
      className="text-color-text-light space-y-4"
      data-testid="lan-server-controls"
    >
      {savedServerURL && (
        <p className="text-sm text-grey-6">
          当前批注服务器：
          <code className="break-all" data-testid="lan-server-current">
            {savedServerURL}
          </code>
        </p>
      )}

      <section className="space-y-2">
        <h3 className="text-sm font-medium text-grey-7">在本机启动房间</h3>
        <p className="text-sm text-grey-6">
          点一下按钮，本机就成为房间主机；把链接发给同事即可加入，
          无需密码（每人显示为各自 IPv4 地址）。
        </p>
        {host.kind === 'running' && (
          <div className="space-y-1">
            <div className="text-sm font-medium text-green-600">
              房间运行中（端口 {host.port}）
            </div>
            {host.urls.length === 0 && (
              <div className="text-sm text-grey-7">
                <code data-testid="lan-server-url">
                  http://127.0.0.1:{host.port}
                </code>
              </div>
            )}
            {host.urls.map(url => (
              <div
                key={url}
                className="flex items-center gap-2 text-sm text-grey-7"
              >
                <code className="break-all" data-testid="lan-server-url">
                  {url}
                </code>
                <button
                  className="px-2 py-0.5 rounded border hover:bg-grey-1"
                  onClick={() => copyLink(url)}
                >
                  复制链接
                </button>
              </div>
            ))}
            <button
              className="px-3 py-1.5 rounded border text-red-600 hover:bg-red-50"
              data-testid="lan-server-stop"
              onClick={onStop}
            >
              停止房间
            </button>
          </div>
        )}
        {host.kind !== 'running' && (
          <button
            className="px-3 py-1.5 rounded bg-brand text-white disabled:opacity-50"
            data-testid="lan-server-start"
            onClick={onStart}
            disabled={host.kind === 'checking'}
          >
            {host.kind === 'checking' ? '正在连接本机助手…' : startLabel}
          </button>
        )}
        {host.kind === 'error' && (
          <div className="space-y-2">
            <p className="text-sm text-red-600" data-testid="lan-server-error">
              {host.message}
            </p>
            {getNativeHostInstallCommand() && (
              <div className="flex items-center gap-2 text-sm">
                <code className="break-all rounded bg-grey-1 px-2 py-1">
                  {getNativeHostInstallCommand()}
                </code>
                <button
                  className="px-2 py-1 rounded border hover:bg-grey-1"
                  data-testid="lan-server-copy-install-command"
                  onClick={copyInstallCommand}
                >
                  {installCommandCopied ? '已复制' : '复制安装命令'}
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="space-y-2 border-t pt-4">
        <h3 className="text-sm font-medium text-grey-7">加入别人的房间</h3>
        <p className="text-sm text-grey-6">
          粘贴主持人分享的局域网链接即可加入。
        </p>
        <input
          className="w-full border rounded p-2"
          placeholder="http://192.168.1.10:8123"
          value={value}
          onInput={e => setValue((e.target as HTMLInputElement).value)}
          data-testid="lan-server-input"
        />
        <div className="flex justify-end gap-2">
          {onCancel && (
            <button
              className="px-3 py-1.5 rounded border hover:bg-grey-1"
              data-testid="lan-server-cancel"
              onClick={onCancel}
            >
              取消
            </button>
          )}
          <button
            className="px-3 py-1.5 rounded bg-brand text-white"
            data-testid="lan-server-save"
            onClick={() => onSave(normalizeLanServerURL(value))}
          >
            保存并重连
          </button>
        </div>
        {savedServerURL && (
          <button
            className="text-sm text-grey-6 underline"
            data-testid="lan-server-reset"
            onClick={() => onSave('')}
          >
            退出房间，回到本地模式（房间内的批注将不再显示）
          </button>
        )}
      </section>
    </div>
  );
}
