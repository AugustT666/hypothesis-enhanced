#!/usr/bin/env bash
# 一键构建 Hypothesis 增强版：构建 client，再构建浏览器扩展。
set -euo pipefail

cd "$(dirname "$0")"

CLIENT_YARN="node .yarn/releases/yarn-3.6.0.cjs"
EXT_YARN="node .yarn/releases/yarn-3.6.1.cjs"

echo "==> 构建 client"
(cd client && $CLIENT_YARN run build)

echo "==> 安装扩展依赖"
(cd browser-extension && ($EXT_YARN install --mode=skip-build 2>/dev/null || $EXT_YARN install) && touch node_modules/.uptodate)

echo "==> 构建扩展 (settings/chrome-local.json)"
rm -rf browser-extension/build
(cd browser-extension && make build SETTINGS_FILE=settings/chrome-local.json)
rm -f browser-extension/build/tests.bundle.js browser-extension/build/tests.bundle.js.map
rm -f browser-extension/build/scripts/test-inputs.js

echo "==> 同步可安装目录 dist/hypothesis-enhanced"
rm -rf dist/hypothesis-enhanced
mkdir -p dist
cp -R browser-extension/build dist/hypothesis-enhanced

echo ""
echo "完成！直接加载 dist/hypothesis-enhanced/ 目录即可。"
echo "无需打包或解压；如需发布用 zip，可运行："
echo "  (cd browser-extension && make dist/hypothesis-enhanced.zip SETTINGS_FILE=settings/chrome-local.json)"
echo "Edge 里打开 edge://extensions，开启'开发人员模式'，"
echo "点'加载解压缩的扩展'，选择 dist/hypothesis-enhanced/ 目录。"
echo "不需要启动任何本地服务，不需要登录。"
