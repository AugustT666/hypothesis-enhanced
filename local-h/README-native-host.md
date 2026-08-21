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

## 数据与日志

- 房间数据：`~/Library/Application Support/H Local/annotations.json`
- 助手日志：`~/Library/Application Support/H Local/native-host.log`

> 注：上述目录名和 `com.hlocal.server` 为旧版内部标识，为保证已安装用户的数据与配置兼容，暂未改名。
