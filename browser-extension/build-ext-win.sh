#!/usr/bin/env bash
# Windows 等价构建：复刻 build-all.sh 中 `make build` 部分（Git Bash 无 make 时使用）
set -euo pipefail
cd "$(dirname "$0")"

SETTINGS_FILE=settings/chrome-local.json

echo "==> 生成 build/settings.json"
mkdir -p build
node tools/settings.js "$SETTINGS_FILE" > build/settings.json.tmp
mv -f build/settings.json.tmp build/settings.json
touch build/settings.json

echo "==> 打包 background (rollup)"
node_modules/.bin/rollup -c rollup.config.js

echo "==> 生成 manifest.json (mustache)"
node_modules/.bin/mustache build/settings.json src/manifest.json.mustache > build/manifest.json

echo "==> 复制 client 产物"
mkdir -p build/client/build/scripts build/client/build/styles
cp node_modules/hypothesis/build/boot-template.js build/client/build/boot-template.js
cp node_modules/hypothesis/build/scripts/annotator.bundle.js build/client/build/scripts/
cp node_modules/hypothesis/build/scripts/sidebar.bundle.js build/client/build/scripts/
for css in annotator.css highlights.css katex.min.css pdfjs-overrides.css sidebar.css; do
  cp "node_modules/hypothesis/build/styles/$css" build/client/build/styles/
done
cp -R node_modules/hypothesis/build/styles/fonts build/client/build/styles/
node tools/render-boot-template.js build/client/build/boot-template.js build/client/build/boot.js
rm build/client/build/boot-template.js

echo "==> 生成 app.html"
node tools/template-context-app.js build/settings.json | node_modules/.bin/mustache - src/sidebar-app.html.mustache > build/client/app.html
cp build/client/app.html build/client/notebook.html
cp build/client/app.html build/client/profile.html

echo "==> 复制静态资源"
cp src/unload-client.js build/unload-client.js
cp src/pdfjs-init.js build/pdfjs-init.js
cp -R src/vendor/pdfjs build/pdfjs
for d in native-host help images options; do
  mkdir -p "build/$d"
  cp -R "src/$d/." "build/$d/"
done

rm -f build/tests.bundle.js build/tests.bundle.js.map
rm -f build/scripts/test-inputs.js

echo "==> 同步 dist/hypothesis-enhanced"
cd ..
rm -rf dist/hypothesis-enhanced
mkdir -p dist
cp -R browser-extension/build dist/hypothesis-enhanced
rm -rf browser-extension/build

echo "完成！加载 dist/hypothesis-enhanced/ 即可。"
