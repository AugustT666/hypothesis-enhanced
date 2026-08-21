#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "目前只支持 macOS。其它系统请参考 local-h/README-native-host.md。" >&2
  exit 1
fi

EXT_ID="${1:-}"
if [[ -z "$EXT_ID" ]]; then
  echo "用法: $0 <扩展ID>" >&2
  echo "" >&2
  echo "扩展 ID 在 edge://extensions（或 chrome://extensions）里，H Local" >&2
  echo "卡片的 ID 一栏可以看到，通常是 32 位小写字母 a-p。" >&2
  exit 1
fi

if [[ ! "$EXT_ID" =~ ^[a-p]{32}$ ]]; then
  echo "警告：扩展 ID 看起来不像 Chrome/Edge 扩展 ID（预期 32 位 a-p 小写字母）。" >&2
  echo "如果确认无误请继续，否则 Ctrl-C 后重新输入。" >&2
  sleep 2
fi

NODE_BIN="$(command -v node || true)"
if [[ -z "$NODE_BIN" ]]; then
  echo "未找到 node。请先安装 Node.js：https://nodejs.org/" >&2
  exit 1
fi

DATA_DIR="$HOME/Library/Application Support/H Local/native-host"
mkdir -p "$DATA_DIR"

cp "$ROOT/local-h/server.mjs" "$DATA_DIR/server.mjs"
cp "$ROOT/local-h/native-host.mjs" "$DATA_DIR/hlocal-host.mjs"

cat > "$DATA_DIR/hlocal-server-wrapper" <<EOF
#!/bin/sh
exec '$NODE_BIN' '$DATA_DIR/hlocal-host.mjs'
EOF
chmod +x "$DATA_DIR/hlocal-server-wrapper"

write_manifest() {
  local browser_name="$1"
  local manifest_dir="$2"

  mkdir -p "$manifest_dir"
  cat > "$manifest_dir/com.hlocal.server.json" <<EOF
{
  "name": "com.hlocal.server",
  "description": "H Local 局域网批注服务器（由扩展一键启动）",
  "path": "$DATA_DIR/hlocal-server-wrapper",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://$EXT_ID/"
  ]
}
EOF
  echo "已注册 $browser_name：$manifest_dir/com.hlocal.server.json"
}

write_manifest "Edge" \
  "$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
write_manifest "Chrome" \
  "$HOME/Library/Application Support/Google/Chrome/NativeMessagingHosts"

echo ""
echo "本机助手安装完成。"
echo "请完全退出 Edge/Chrome 后重新打开（Native Messaging 清单只在启动时读取）。"
echo "验证：cd '$ROOT' && node e2e/native-host-test.mjs"
