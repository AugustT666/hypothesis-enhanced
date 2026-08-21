#!/usr/bin/env bash
# 一键构建 Hypothesis 增强版：先构建 client，再构建并打包浏览器扩展。
set -euo pipefail

cd "$(dirname "$0")"

CLIENT_YARN="node .yarn/releases/yarn-3.6.0.cjs"
EXT_YARN="node .yarn/releases/yarn-3.6.1.cjs"

echo "==> 构建 client"
(cd client && $CLIENT_YARN run build)

echo "==> 安装扩展依赖"
(cd browser-extension && ($EXT_YARN install --mode=skip-build 2>/dev/null || $EXT_YARN install) && touch node_modules/.uptodate)

echo "==> 构建扩展 (settings/chrome-local.json)"
(cd browser-extension && make build SETTINGS_FILE=settings/chrome-local.json)

echo "==> 打包"
(cd browser-extension && make dist/hypothesis-enhanced.zip SETTINGS_FILE=settings/chrome-local.json)

echo ""
echo "完成！产物: browser-extension/dist/hypothesis-enhanced.zip"
echo "Edge 里打开 edge://extensions，开启'开发人员模式'，"
echo "点'加载解压缩的扩展'，选择 browser-extension/build/ 目录。"
echo "不需要启动任何本地服务，不需要登录。"
