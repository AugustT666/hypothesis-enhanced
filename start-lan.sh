#!/usr/bin/env bash
# 启动局域网协作服务器（local-h），供同局域网内的其他机器连接。
set -euo pipefail

cd "$(dirname "$0")"

DATA_FILE="${H_LOCAL_DATA:-annotations.json}"
PORT="${H_LOCAL_PORT:-8123}"

# 监听所有网卡，局域网内可访问。
export LOCAL_H_HOST="${LOCAL_H_HOST:-0.0.0.0}"

echo "启动局域网批注服务器: 端口 ${PORT} (数据文件: ${DATA_FILE})"
echo ""
echo "本机局域网地址（把其中任意一个分享给同事即可加入房间，无需密码）:"
# 列出所有非回环、非 Tailscale 的 IPv4 地址（不过滤网段，换任何网络都能用）。
ifconfig 2>/dev/null | awk '/inet / {print $2}' | grep -v '^127\.' \
  | grep -vE '^100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\.' \
  | while read -r ip; do
  [ -n "$ip" ] && echo "   http://$ip:${PORT}"
done

# Tailscale 网段（100.64.0.0/10），tailnet 内的设备用这个地址加入。
TS_IP="$(tailscale ip -4 2>/dev/null || ifconfig 2>/dev/null | awk '/inet 100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\./ {print $2}' | head -1)"
if [ -n "$TS_IP" ]; then
  echo ""
  echo "Tailscale 地址（tailnet 内设备可用，跨局域网也能加入）:"
  echo "   http://$TS_IP:${PORT}"
fi
echo ""
echo "其他人：浏览器扩展侧栏 → 用户菜单 → “局域网服务器…” → 粘贴上面的链接 → 保存并重连。"
exec node local-h/server.mjs --port "$PORT" --data "$DATA_FILE"
