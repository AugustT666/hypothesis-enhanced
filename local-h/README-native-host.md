# 本机服务器助手（Native Messaging Host）安装说明

Hypothesis 增强版扩展通过 Edge/Chrome 的 Native Messaging 机制拉起本机助手，
助手再以脱离进程方式运行 `server.mjs`（局域网批注服务器）。安装后打开侧栏
顶部的**分享面板**，在官方公网链接下方点**创建局域网房间**（或使用「用户
菜单 → 局域网服务器… → 启动房间」）即可；每台想当房间主机的机器安装一次
即可。

## 安装（macOS + Edge）

推荐用仓库里的安装脚本，一条命令即可（`<扩展ID>` 在
`edge://extensions` 的 Hypothesis 增强版卡片上可见）：

```sh
./local-h/install-native-host.sh <扩展ID>
```

脚本会同时注册 Edge 和 Chrome。也可以手动安装：

1. 确认 node 已安装，并记下绝对路径：

   ```sh
   command -v node
   ```

2. 创建助手目录并拷贝两个文件（把 `<仓库根>` 换成本仓库路径；已用安装脚本可跳过）：

   ```sh
   DIR="$HOME/Library/Application Support/H Local/native-host"
   mkdir -p "$DIR"
   cp <仓库根>/local-h/server.mjs "$DIR/server.mjs"
   cp <仓库根>/local-h/native-host.mjs "$DIR/hlocal-host.mjs"
   ```

3. 写一个带绝对 node 路径的包装脚本（浏览器 GUI 进程的 PATH 里通常没有
   node，所以不能依赖 `#!/usr/bin/env node`）：

   ```sh
   cat > "$DIR/hlocal-server-wrapper" <<EOF
   #!/bin/sh
   exec <node 绝对路径> "$DIR/hlocal-host.mjs"
   EOF
   chmod +x "$DIR/hlocal-server-wrapper"
   ```

4. 注册给 Edge（`<扩展ID>` 是该机器上 Hypothesis 增强版解压扩展的 ID，
   `edge://extensions` 里可见）：

   ```sh
   EDGE_HOSTS="$HOME/Library/Application Support/Microsoft Edge/NativeMessagingHosts"
   mkdir -p "$EDGE_HOSTS"
   cat > "$EDGE_HOSTS/com.hlocal.server.json" <<EOF
   {
     "name": "com.hlocal.server",
     "description": "Hypothesis 增强版局域网批注服务器（由扩展一键启动）",
     "path": "$DIR/hlocal-server-wrapper",
     "type": "stdio",
     "allowed_origins": [
       "chrome-extension://<扩展ID>/"
     ]
   }
   EOF
   ```

5. **完全退出并重开 Edge**（Native Messaging 清单只在浏览器启动时读取），
   然后打开扩展侧栏，点顶部**分享图标**，在公网分享链接下方点
   **创建局域网房间**（或用户菜单 → 「局域网服务器…」→「启动房间」）。

## 验证

```sh
node e2e/native-host-test.mjs   # 期望输出 NATIVE HOST TEST PASSED
```

## 其它浏览器 / 系统

- Chrome：把第 4 步目录换成
  `~/Library/Application Support/Google/Chrome/NativeMessagingHosts`。
- 不需要一键启动时，直接前台运行 `./start-lan.sh` 即可（效果相同）。

## 安装（Windows + Edge/Chrome）

Windows 下有两种方式：

### 方式一：扩展内一键下载安装器（推荐）

1. 打开扩展侧栏 → 用户菜单 → 「局域网服务器…」→ 点「启动房间」
2. 如果提示"未找到本机服务器助手"，会显示「下载一键安装脚本」按钮
3. 点击下载 `install-h-local.bat`，在浏览器下载栏打开它
4. 如出现 SmartScreen 提示，选择「仍要运行」
5. 安装完成后**完全退出并重新打开 Edge/Chrome**

### 方式二：手动安装（PowerShell）

以 PowerShell 管理员身份运行（把 `<扩展ID>` 换成 `edge://extensions`
里 Hypothesis 增强版卡片的 ID）：

```powershell
# 确认 node 已安装
node --version

# 设置变量
$extId = "<扩展ID>"
$dataDir = "$env:LOCALAPPDATA\H Local\native-host"
$repoRoot = "<仓库根路径>"

# 创建目录并拷贝文件
New-Item -ItemType Directory -Force -Path $dataDir
Copy-Item "$repoRoot\local-h\server.mjs" "$dataDir\server.mjs" -Force
Copy-Item "$repoRoot\local-h\native-host.mjs" "$dataDir\native-host.mjs" -Force

# 生成 wrapper.cmd（写死 node 绝对路径）
$node = (Get-Command node).Source
$cmd = "@echo off`r`n`"$node`" `"%~dp0native-host.mjs`""
Set-Content -Path "$dataDir\hlocal-host.cmd" -Value $cmd -Encoding ASCII

# 生成 Native Messaging 清单
$manifest = @{
  name = "com.hlocal.server"
  description = "Hypothesis Enhanced local annotation server"
  path = "$dataDir\hlocal-host.cmd"
  type = "stdio"
  allowed_origins = @("chrome-extension://$extId/")
} | ConvertTo-Json -Depth 3
Set-Content -Path "$dataDir\com.hlocal.server.json" -Value $manifest -Encoding UTF8

# 注册到注册表（Edge + Chrome）
foreach ($browser in @(
  "HKCU:\Software\Microsoft\Edge\NativeMessagingHosts\com.hlocal.server",
  "HKCU:\Software\Google\Chrome\NativeMessagingHosts\com.hlocal.server"
)) {
  New-Item -Force -Path $browser | Out-Null
  Set-Item -Path $browser -Value "$dataDir\com.hlocal.server.json"
}

Write-Host "安装完成。请完全重启浏览器。" -ForegroundColor Green
```

安装后**完全退出并重新打开**浏览器，再点「启动房间」即可。

## 数据与日志

| 系统 | 数据 | 日志 |
|------|------|------|
| macOS | `~/Library/Application Support/H Local/annotations.json` | `~/Library/Application Support/H Local/native-host.log` |
| Windows | `%LOCALAPPDATA%\H Local\annotations.json` | `%LOCALAPPDATA%\H Local\native-host.log` |

> 注：上述目录名和 `com.hlocal.server` 为旧版内部标识，为保证已安装用户的数据与配置兼容，暂未改名。
