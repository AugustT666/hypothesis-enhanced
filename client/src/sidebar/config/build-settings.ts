import type {
  ConfigFromHost,
  ConfigFromAnnotator,
  ConfigFromEmbedder,
  ConfigFromSidebar,
  RPCSettings,
  SidebarSettings,
} from '../../types/config';
import * as postMessageJsonRpc from '../util/postmessage-json-rpc';
import { isPlausibleLanServerURL } from '../util/lan-server-url';
import { getApiUrl } from './get-api-url';
import { hostPageConfig } from './host-config';

/**
 * Ascend `levels` from `window_` to find the designated embedder frame.
 *
 * @param levels - Number of ancestor levels to ascend
 */
function getEmbedderFrame(levels: number, window_: Window = window): Window {
  let ancestorWindow = window_;
  for (let i = 0; i < levels; i++) {
    if (ancestorWindow === ancestorWindow.top) {
      throw new Error(
        'The target parent frame has exceeded the ancestor tree. Try reducing the `requestConfigFromFrame.ancestorLevel` value in the `hypothesisConfig`',
      );
    }
    ancestorWindow = ancestorWindow.parent;
  }
  return ancestorWindow;
}

/**
 * Which groups to load and show in the sidebar may be dictated in
 * ConfigFromHost configuration: the special value `$rpc:requestGroups`
 * indicates that the list of groups should be requested asynchronously.
 *
 * This function (maybe) mutates values in the provided `configFromHost`'s
 * ServiceGroups: `$rpc:requestGroups` values are replaced with
 * `Promise<string[]>`.
 */
function fetchServiceGroups(
  configFromHost: ConfigFromHost,
  rpcSettings: RPCSettings,
): ConfigFromHost {
  const services = configFromHost.services;
  if (!Array.isArray(services)) {
    return configFromHost;
  }
  services.forEach((service, index) => {
    if (service.groups === '$rpc:requestGroups') {
      // The `groups` need to be fetched from a secondary RPC call and
      // there should be no timeout as it may be waiting for user input.
      service.groups = postMessageJsonRpc
        .call<string[]>(
          rpcSettings.targetFrame,
          rpcSettings.origin,
          'requestGroups',
          [index],
          0, // no timeout
        )
        .catch(() => {
          throw new Error('Unable to fetch groups');
        });
    }
  });
  return configFromHost;
}

/**
 * Derive RPC settings from the provided `ConfigFromAnnotator`, if any are present.
 */
function buildRPCSettings(
  configFromAnnotator: ConfigFromAnnotator,
  window_: Window,
): RPCSettings | null {
  const rpcConfig = configFromAnnotator.requestConfigFromFrame;
  if (!rpcConfig) {
    return null;
  } else if (
    typeof rpcConfig.ancestorLevel !== 'number' ||
    typeof rpcConfig.origin !== 'string'
  ) {
    throw new Error(
      'Improper `requestConfigFromFrame` object. Both `ancestorLevel` and `origin` need to be specified',
    );
  }
  return {
    targetFrame: getEmbedderFrame(rpcConfig.ancestorLevel, window_),
    origin: rpcConfig.origin,
  };
}

/**
 * Retrieve host configuration from embedder frame
 */
async function getEmbedderConfig(
  configFromAnnotator: ConfigFromAnnotator,
  rpcSettings: RPCSettings,
): Promise<ConfigFromEmbedder> {
  const configFromEmbedder = await postMessageJsonRpc.call<ConfigFromEmbedder>(
    rpcSettings.targetFrame,
    rpcSettings.origin,
    'requestConfig',
    [],
    3000,
  );

  // In cases where host configuration is requested from the embedder frame
  // (`ConfigFromEmbedder`), `ConfigFromAnnotator` values are discarded.
  //
  // The `group` property, however, is currently not provided by
  // `ConfigFromEmbedder` and needs to be restored. This property is used by the
  // Notebook.
  // TODO: Notebook group should be set by alternate means
  return {
    ...configFromEmbedder,
    ...(configFromAnnotator.group ? { group: configFromAnnotator.group } : {}),
  };
}

/**
 * Build a `SidebarSettings` object by merging the provided `ConfigFromSidebar`
 * with host configuration (`ConfigFromAnnotator` OR `ConfigFromEmbedder`).
 *
 * @see {ConfigFromAnnotator}
 * @see {ConfigFromEmbedder}
 * @see {ConfigFromHost}
 *
 * @return The merged settings
 */
/**
 * Normalize a user-provided LAN server address into an API URL.
 *
 * Accepts inputs like "192.168.1.10:8123", "http://192.168.1.10:8123" or
 * "http://192.168.1.10:8123/api" and returns "<url>/api/".
 */
function normalizeServerURL(url: string): string {
  let normalized = url.trim();
  if (!/^https?:\/\//.test(normalized)) {
    normalized = `http://${normalized}`;
  }
  normalized = normalized.replace(/\/+$/, '');
  if (!normalized.endsWith('/api')) {
    normalized += '/api';
  }
  return `${normalized}/`;
}

/**
 * Check whether the LAN annotation server at `serverURL` is actually serving.
 *
 * Used as a guard before entering LAN mode with a saved loopback address:
 * if the native helper is not running, the sidebar would otherwise fail to
 * load entirely. Times out quickly so startup is not delayed for long.
 */
async function canReachLocalServer(
  serverURL: string,
  window_: Window = window,
): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = window_.setTimeout(() => controller.abort(), 2000);
    try {
      const response = await window_.fetch(normalizeServerURL(serverURL), {
        signal: controller.signal,
      });
      // Any HTTP response (even an error status) means something is serving.
      return response.status > 0;
    } finally {
      window_.clearTimeout(timeout);
    }
  } catch {
    return false;
  }
}

export async function buildSettings(
  configFromSidebar: ConfigFromSidebar,
  window_: Window = window,
): Promise<SidebarSettings> {
  // 官方服务模式(运行时切换)。
  //
  // 用户在扩展设置页选择「官方服务」时,会在扩展源(所有扩展页面共享的
  // localStorage)写入 h-local.service = 'official'。侧边栏 frame 与设置页
  // 同源,启动时在这里读到该选择,并把数据源从内置的本地模式切换到官方
  // Hypothes.is 服务:官方账号登录、批注在线同步,无需重新构建。
  //
  // 安全说明:切换目标只能是构建时内置的官方端点(officialApiUrl 等),
  // 页面或脚本无法借此把数据发往任意地址。
  //
  // 优先级:若同时保存了局域网房间地址(见下方),局域网房间仍然生效;
  // 清除房间地址后回到官方服务。
  const serviceMode = window_.localStorage?.getItem?.('h-local.service') ?? '';
  if (serviceMode === 'official') {
    if (
      configFromSidebar.officialApiUrl &&
      configFromSidebar.officialOauthClientId
    ) {
      configFromSidebar = {
        ...configFromSidebar,
        apiUrl: configFromSidebar.officialApiUrl,
        authDomain: configFromSidebar.officialAuthDomain ?? 'hypothes.is',
        oauthClientId: configFromSidebar.officialOauthClientId,
        noAuth: false,
        localApi: false,
      };
    } else {
      // 构建里没有内置官方服务配置(例如旧版本构建)。丢弃无效选择,
      // 避免侧边栏因官方配置缺失而无法加载。
      try {
        window_.localStorage?.removeItem?.('h-local.service');
      } catch {
        // 忽略存储错误;本次会话仍回退到内置数据源。
      }
    }
  }

  // A server address saved at runtime (via the LAN sharing controls in the
  // Share panel) switches this installation to LAN mode regardless of the
  // built configuration: peers join a room by pasting the host's link, and
  // the host connects to the room started by the bundled native helper on
  // 127.0.0.1. With no saved address, the built-in data source applies.
  //
  // Safety net for a saved LAN server address:
  //
  // 1. Addresses that are not plausible LAN addresses (e.g. an official
  //    hyp.is share link pasted into the "join room" input) are dropped
  //    immediately: routing the annotation API at a public website breaks
  //    the sidebar.
  // 2. Plausible addresses (loopback or LAN IP) are probed with a short
  //    timeout. If nothing is serving there (host left, helper stopped),
  //    drop the address and fall back to the built-in data source.
  let serverURL = window_.localStorage?.getItem?.('h-local.server') ?? '';
  if (serverURL && !isPlausibleLanServerURL(serverURL)) {
    serverURL = '';
    try {
      window_.localStorage?.removeItem?.('h-local.server');
    } catch {
      // Ignore storage errors; the in-memory fallback still applies.
    }
  }
  if (serverURL) {
    const reachable = await canReachLocalServer(serverURL, window_);
    if (!reachable) {
      serverURL = '';
      try {
        window_.localStorage?.removeItem?.('h-local.server');
      } catch {
        // Ignore storage errors; the in-memory fallback still applies.
      }
    }
  }
  if (serverURL) {
    configFromSidebar = {
      ...configFromSidebar,
      localApi: false,
      apiUrl: normalizeServerURL(serverURL),
    };
  }

  const configFromAnnotator = hostPageConfig(window);

  const rpcSettings = buildRPCSettings(configFromAnnotator, window_);
  let configFromHost;
  if (rpcSettings) {
    // The presence of RPCSettings indicates that we should
    // source the ConfigFromHost from another frame, and potentially load
    // the correct groups asynchronously as well.
    const configFromEmbedder = await getEmbedderConfig(
      configFromAnnotator,
      rpcSettings,
    );
    configFromHost = fetchServiceGroups(configFromEmbedder, rpcSettings);
  } else {
    configFromHost = configFromAnnotator;
  }

  const sidebarSettings: SidebarSettings = {
    ...configFromSidebar,
    ...configFromHost,
  };
  if (rpcSettings) {
    sidebarSettings.rpc = rpcSettings;
  }
  sidebarSettings.apiUrl = getApiUrl(sidebarSettings);

  return sidebarSettings;
}
