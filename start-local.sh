#!/usr/bin/env bash
# 启动 Hypothesis 增强版本地注释服务（免登录）。
set -euo pipefail

cd "$(dirname "$0")"

DATA_FILE="${H_LOCAL_DATA:-annotations.json}"
PORT="${H_LOCAL_PORT:-8123}"

echo "启动本地注释服务: http://127.0.0.1:${PORT} (数据文件: ${DATA_FILE})"
exec node local-h/server.mjs --port "$PORT" --data "$DATA_FILE"
