import { useCallback, useState } from 'preact/hooks';

import { LOCAL_API_ANNOTATIONS_KEY } from '../services/local-api';
import { copyPlainText } from '../util/copy-to-clipboard';
import type { HostReply, HostStatus } from './LanServerControls';

export type AgentDeliveryProps = {
  /** Current status of the local annotation service. */
  host: HostStatus;

  /** Start the local annotation service, returning its host info. */
  onStart: () => Promise<HostReply | null>;
};

type DeliveryState =
  | { kind: 'idle' }
  | { kind: 'working' }
  | { kind: 'done'; message: string }
  | { kind: 'error'; message: string };

function buildAgentPrompt(
  urls: string[],
  hostInfo?: { hostname?: string; platform?: string },
): string {
  const lines = ['请定位以下服务器获取批注，并逐条处理。', '', '服务器信息：'];
  if (hostInfo?.hostname) {
    lines.push(`- 主机名：${hostInfo.hostname}`);
  }
  if (hostInfo?.platform) {
    lines.push(`- 系统：${hostInfo.platform}`);
  }
  lines.push('服务器地址（选一个你能访问的）：');
  urls.forEach(url => lines.push(`- ${url}`));
  lines.push('', '获取全部批注：', `curl ${urls[0]}/api/search`);
  return lines.join('\n');
}

function annotationKey(annotation: Record<string, unknown>): string {
  return `${annotation.uri ?? ''}|${annotation.text ?? ''}|${annotation.created ?? ''}`;
}

/**
 * Copy annotations saved in the browser's local storage to a local-h server.
 *
 * This is intentionally a one-time export: the browser remains the primary
 * store, and users click "交付给 Agent" again after adding more annotations.
 */
async function uploadLocalAnnotations(port: number): Promise<number> {
  const base = `http://127.0.0.1:${port}`;
  const raw = localStorage.getItem(LOCAL_API_ANNOTATIONS_KEY);
  const annotations = raw ? JSON.parse(raw) : [];
  if (!Array.isArray(annotations) || annotations.length === 0) {
    return 0;
  }

  let existing: Record<string, unknown>[] = [];
  try {
    const response = await fetch(`${base}/api/annotations`);
    if (response.ok) {
      const result = (await response.json()) as {
        rows?: Record<string, unknown>[];
      };
      existing = result.rows ?? [];
    }
  } catch {
    // The service just started; if its status endpoint isn't ready yet the
    // POST requests below will surface any real problem.
  }

  const seen = new Set(existing.map(annotationKey));
  let uploaded = 0;
  for (const annotation of annotations as Record<string, unknown>[]) {
    const key = annotationKey(annotation);
    if (seen.has(key)) {
      continue;
    }
    const response = await fetch(`${base}/api/annotations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(annotation),
    });
    if (!response.ok) {
      throw new Error(`上传批注失败（HTTP ${response.status}）`);
    }
    seen.add(key);
    uploaded += 1;
  }
  return uploaded;
}

/**
 * Button which exposes the current browser-local annotations to agents.
 */
export default function AgentDelivery({ host, onStart }: AgentDeliveryProps) {
  const [state, setState] = useState<DeliveryState>({ kind: 'idle' });

  const deliver = useCallback(async () => {
    setState({ kind: 'working' });
    try {
      const reply =
        host.kind === 'running'
          ? {
              ok: true as const,
              status: 'running' as const,
              port: host.port,
              urls: host.urls,
              hostname: host.hostname,
              platform: host.platform,
            }
          : await onStart();

      if (
        !reply?.ok ||
        (reply.status !== 'running' && reply.status !== 'started') ||
        reply.urls.length === 0
      ) {
        setState({
          kind: 'error',
          message: '本机批注服务启动失败，请先按上方提示安装或启动助手。',
        });
        return;
      }

      const urls = reply.urls;
      const uploaded = await uploadLocalAnnotations(reply.port);
      const prompt = buildAgentPrompt(urls, {
        hostname: reply.hostname,
        platform: reply.platform,
      });
      await copyPlainText(prompt);
      setState({
        kind: 'done',
        message: `已复制 Agent 提示词，并同步 ${uploaded} 条批注。`,
      });
    } catch (err) {
      setState({
        kind: 'error',
        message: err instanceof Error ? err.message : '交付失败，请稍后重试。',
      });
    }
  }, [host, onStart]);

  const working = state.kind === 'working';

  return (
    <div className="space-y-2" data-testid="agent-delivery">
      <button
        className="px-3 py-1.5 rounded bg-brand text-white disabled:opacity-50"
        data-testid="agent-delivery-button"
        disabled={working}
        onClick={deliver}
      >
        {working ? '正在准备…' : '交付给 Agent'}
      </button>
      {state.kind === 'done' && (
        <p className="text-sm text-green-700" data-testid="agent-delivery-done">
          {state.message}
        </p>
      )}
      {state.kind === 'error' && (
        <p className="text-sm text-red-600" data-testid="agent-delivery-error">
          {state.message}
        </p>
      )}
    </div>
  );
}
