# H Local — 无需登录、无需服务器的网页文字 + 网页图片批注（Hypothesis 魔改版）

基于开源项目 [hypothesis/client](https://github.com/hypothesis/client) 和
[hypothesis/browser-extension](https://github.com/hypothesis/browser-extension)
魔改的自用版本，两个改动：

1. **支持对网页图片（`<img>` 元素）的框选/打点批注**
   （借鉴官方 PDF 图片批注的实现：`ShapeSelector` + 画框工具 + 形状高亮 + 侧栏缩略图）。
2. **无需登录、无需本地服务**：批注数据直接存在浏览器扩展自己的
   `localStorage` 里（同一扩展源所有标签页共享、刷新不丢），客户端
   `localApi` 模式下所有 API 调用走浏览器本地存储，完全离线可用。

> 官方版只支持 PDF 内的图片批注（`pdf_image_annotation`），
> 网页图片批注多年来一直是社区呼声很高但未实现的功能。
> 本仓库把它补齐，并把锚定方式照搬了 PDF 那套（见下文"实现说明"）。

## 目录结构

```
client/              魔改后的 hypothesis/client（核心改动都在这里）
browser-extension/   魔改后的 hypothesis/browser-extension（打包成 Chrome/Edge 扩展）
local-h/             可选的极简注释服务（团队共享/多机同步时才需要，零依赖）
e2e/                 端到端验证（真实 Chromium 自动画框批注）
build-all.sh         一键构建脚本
```

## 快速开始（无需任何服务）

### 1. 构建

```sh
./build-all.sh
```

产物：`browser-extension/dist/h-local.zip`（解压后可作为未打包扩展加载），
或直接使用 `browser-extension/build/` 目录。

### 2. 安装到 Edge / Chrome（3 步，约 10 秒）

1. 打开 `edge://extensions`（Chrome 则是 `chrome://extensions`）；
2. 打开右上角（或左下角）的 **"开发人员模式 / 开发者模式"** 开关；
3. 点 **"加载解压缩的扩展 / Load unpacked"**，选择
   `/Users/august/workbuddy-ai/deepseek/browser-extension/build` 目录
   （文件选择框里按 `Cmd+Shift+G` 可直接粘贴该路径）。

装完即可用，**不需要启动任何本地服务，不需要注册登录**。

> 提示：开发人员模式加载的扩展在浏览器每次启动时可能弹出
> "关闭开发人员模式扩展？"的提示，点 **"保留"（Keep）** 即可。
> 若日后移动了 `deepseek` 目录，需在扩展页先移除再重新按上面步骤加载一次。

### 3. 使用

- **框选批注（矩形）**：点页面左侧工具栏的**框选图标**，直接在页面上
  **拖出矩形**即可，不需要预先选择元素。矩形批注会记录框选区域、视口坐标、
  区域内所有相交网页元素（XPath、id/class、图片地址、文字摘录）以及一张
  区域截图；刷新页面后仍会重新定位。
- **打点批注（Pin）**：点工具栏的**大头针图标**，同样先滑到目标元素上，
  **单击一下**即完成——pin 直接落在点击位置，侧栏自动打开，并带出该元素的
  文字摘录。
- 批注会以半透明高亮框/圆点显示在页面上；侧栏里图片类元素显示缩略图，
  其它元素显示文字摘录。刷新页面后批注依然在，并会重新定位到原元素。
- 网页文字划选批注、高亮、标签、回复、搜索等官方功能照常可用，全部存在
  浏览器本地，不需要注册或登录。

## 可选：局域网协作（多台电脑共享同一份批注）

默认不需要。同一局域网内想让多台电脑看到同一份批注时，日常使用**完全在
插件里操作**；仅当某台机器第一次要当房间主机时，需运行一次下面的助手安装
脚本（之后不用再管）：

**主机（开房间）**：打开侧栏 → 点顶部**分享图标**。分享面板上方保留官方
公网分享链接；下方新增「局域网共享（可选）」区域，点**创建局域网房间**后，
扩展才会拉起内置的本机服务器助手（Native Messaging，后台进程，关掉浏览器
房间也不断），主机自己自动连入房间，并显示分享链接（如
`http://192.168.1.5:8123`，可直接「复制链接」）。

**其他人（加入）**：安装同一扩展后，点侧栏顶部**分享图标**（或用户菜单 →
「局域网服务器…」）→ 粘贴主机分享的链接 → 「保存并重连」。无需密码，
每人显示为各自 IPv4 地址。

之后所有人的批注实时同步：新批注以「有新更新」横幅提示，点击即应用；
删除也会实时传播。停止房间 = 同一对话框里的「停止房间」。房间数据保存在
主机 `~/Library/Application Support/H Local/annotations.json`。

**Tailscale（跨局域网共享）**：分享面板列出的地址同时包含 Tailscale 网段
（100.64.0.0/10，如 `http://100.x.x.x:8123`）。把这个链接发给同一
tailnet 里的设备，即使不在同一局域网也能加入房间；服务器本就监听
`0.0.0.0`，无需额外配置。

实现分两层：

- **客户端**：侧栏把地址存进 `h-local.server`，任何构建（本地版或 LAN 版）
  都会在运行时切到该服务器（`build-settings.ts` 里的运行时覆盖）；
  官方公网分享面板（`ShareAnnotations.tsx`）原样保留，并在其下方追加
  `LanServerControls` 局域网房间模块；只有点击「创建局域网房间」才会启动
  本机房间。切换服务器时通过扩展 `tabs` API 重载整个标签页，避免只刷新
  侧栏 iframe 导致 PortProvider 拒绝重复连接。
  `LanServerModal` / `LanServerControls` 通过
  `chrome.runtime.sendNativeMessage('com.hlocal.server')` 启动/停止本机房间。
- **服务端**：`local-h/server.mjs` 实现官方 h REST + 实时（WebSocket）
  协议的子集（`/api/links`、`/api/annotations`、`/api/groups`、`/api/profile`
  与 `ws://<host>/ws` 的 `annotation-notification` 推送，删除通知按官方
  语义拿完整批注对象匹配过滤器）；`local-h/native-host.mjs` 是 Native
  Messaging 包装，把 server 作为脱离进程托管（start/stop/status）。
  Native Host 按标准协议在收满 `4 字节长度 + JSON` 后立即响应并退出，
  不等待 `stdin` EOF（浏览器不会主动关闭 stdin，等 EOF 会导致拉起挂起）。

本机服务器助手的安装（每台机器一次，装好后永远不用再管）：

```sh
./local-h/install-native-host.sh <扩展ID>  # 每台机器一次；扩展 ID 见 edge://extensions
node e2e/native-host-test.mjs               # 通过则说明助手已安装且可用
# 手动安装说明：local-h/README-native-host.md
```

无头/其它系统的备用方案仍是脚本：`./start-lan.sh` 直接前台运行服务器并
打印分享链接（局域网地址 + Tailscale 地址）。

## 实现说明

> 开发设计原则：凡是官方已有机制（REST API、实时推送协议、锚定与选择器、
> 侧栏组件等），一律**优先参考官方开发文档**并按官方语义实现，只在明确
> 需要的点上做本地化改动。主要文档：
>
> - [Developing Hypothesis](https://h.readthedocs.io/en/latest/developing/)
>   （代码库导览、架构、测试、特性开关等）
> - [Using the Hypothesis API](https://h.readthedocs.io/en/latest/api/) 与
>   [Real Time API](https://h.readthedocs.io/en/latest/api/realtime/)
>   （REST 与 WebSocket 协议，`local-h/server.mjs` 按其子集实现）
> - [API Reference](https://h.readthedocs.io/en/latest/api-reference/)

### 网页元素批注（对应 client 仓库改动）

- `src/types/api.ts`
  - 新增 `ElementSelector`（用 `tagName` + 简单 XPath + 图片 URL 标识页面
    中的目标元素）；
  - `ShapeSelector.anchor` 支持 `"element"`，坐标为元素边界框的 0-1 分数。
- `src/annotator/anchoring/html-element.ts`（新增）
  - `elementFromPoint`：命中检测 + 几何回退，把行内文字上浮到所在段落/
    标题等块级元素，并能找到被覆盖或 `pointer-events:none` 的图片；
  - `ElementPicker`：选元素 UI——悬停时蓝色描边，单击锁定并返回
    元素与点击坐标，Esc 取消；
  - `describeShape`/`anchorShape`：形状 ↔ 元素分数坐标，附带元素文字摘录，
    高亮渲染复用官方 PDF 形状高亮机制。
- `src/annotator/draw-tool.tsx`：绘制表面覆盖全页面并提升到最高 z-index；
  忽略没有对应 pointerdown 的 pointerup，防止其它交互的松开事件误完成矩形。
- `src/annotator/guest.ts`：**矩形 = 直接在页面上自由拖框**，记录区域元素
  与截图；**打点 = 先用 `ElementPicker` 选中元素，选中点击即落点**；完成/
  取消时清理选元素 UI。
- `src/annotator/integrations/html.ts`：`pickImageTarget`/`clearImageTarget`/
  `describe(element)` 接线；图片类元素渲染侧栏缩略图。
- 侧栏 `Annotation.tsx`/`annotation-metadata.ts`：图片类元素显示缩略图，
  其它元素显示文字摘录。

### 免登录、免服务（对应 client + browser-extension 改动）

- `client/src/sidebar/services/local-api.ts`（新增）：用浏览器 `localStorage`
  实现客户端所需的 h API 子集（索引/链接/资料/组/搜索/批注 CRUD），
  数据存于 `h-local.annotations.v1` / `h-local.profile.v1`。
- `client/src/sidebar/services/api.ts`、`api-routes.ts`：`localApi` 模式下
  API 调用不再走 HTTP，直接分发给本地存储实现。
- `client/src/types/config.ts`：`ConfigFromHost` 新增 `noAuth`、`localApi`。
- `client/src/boot/*`：`localApi` 模式下跳过 `/api` 预加载。
- `client/src/sidebar/services/auth.ts`：`noAuth` 模式下跳过 OAuth。
- `client/src/sidebar/components/UserMenu.tsx`：`noAuth` 模式下隐藏
  "Account settings / Log out"。
- `browser-extension/settings/chrome-local.json`：`localApi + noAuth` 配置。
- `browser-extension/package.json`：依赖改为 `portal:../client`（直链本地
  client，改动即时生效）。
- `browser-extension/src/manifest.json.mustache`：改名/描述，与官方扩展区分。
- `local-h/server.mjs`：保留的可选服务模式（多人共享时用）。

### 已知限制

- 批注存在扩展自己的 `localStorage` 里：**同一浏览器同一份数据**，
  卸载扩展会清除；多台机器之间不共享（需要共享时用上面的可选服务模式）。
- 多个标签页之间不会实时推送同步，切换标签/刷新后可见。
- 懒加载图片（进入视口才加载）在未加载时点不到；`srcset` 图片按当前
  显示的 URL 锚定。
- 没有多用户/权限/审核等 h 服务能力。

## 构建细节

```sh
# client（yarn 3.6，仓库自带）
cd client && node .yarn/releases/yarn-3.6.0.cjs install
node .yarn/releases/yarn-3.6.0.cjs run build

# browser-extension
cd browser-extension && node .yarn/releases/yarn-3.6.1.cjs install
make build SETTINGS_FILE=settings/chrome-local.json
make dist/h-local.zip SETTINGS_FILE=settings/chrome-local.json
```

## 测试

```sh
cd client
node .yarn/releases/yarn-3.6.0.cjs test --grep "html-image-test"   # 图片锚定单元测试 (16)
node .yarn/releases/yarn-3.6.0.cjs test --grep "html-test"         # HTML 集成测试 (63)
node .yarn/releases/yarn-3.6.0.cjs test --grep "auth-test"         # 认证服务测试 (31)
node .yarn/releases/yarn-3.6.0.cjs test --grep "UserMenu-test"     # 用户菜单测试 (32)
node .yarn/releases/yarn-3.6.0.cjs test --grep "ShareAnnotations-test|LanServerControls-test"  # 局域网共享面板测试
node .yarn/releases/yarn-3.6.0.cjs test --grep "features-test"     # 特性开关测试 (6)
node .yarn/releases/yarn-3.6.0.cjs run typecheck
```

### 端到端验证（真实浏览器）

```sh
# 需要先构建过 client（见上），无需任何本地服务
node e2e/e2e-test.mjs
```

脚本会用 Playwright 打开一个带图片的测试页，自动完成：点击工具栏框选按钮
→ 在图片上拖出矩形 → 输入批注并发布 → 校验图片上的高亮框位置 →
刷新页面后校验批注从浏览器本地存储恢复并重新锚定到图片。
输出 `E2E PASSED` 即全部通过。

局域网协作端到端验证：

```sh
node e2e/lan-test.mjs
```

脚本会启动 `local-h` 与静态测试页，用两个浏览器实例模拟两台机器：A 创建
批注 → B 实时收到「有新更新」横幅并应用 → 创建者显示为 IP → A 删除批注 →
B 实时移除。输出 `LAN TEST PASSED` 即全部通过。

## 许可

上游代码遵循 [BSD-2-Clause](client/LICENSE) 许可，本仓库改动同样以
BSD-2-Clause 发布。Hypothesis 是 Hypothes.is Project 的注册商标，本 fork
与官方项目无关。
