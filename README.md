# Hypothesis 增强版（Hypothesis Enhanced）

在官方 [Hypothesis](https://hypothes.is) 客户端与浏览器扩展基础上二次开发的增强版本。

主要增强：

- **免登录本地模式**：默认构建无需账号和服务，批注保存在浏览器本地，离线可用。
- **网页图片 / 元素批注**：支持框选网页图片、段落、卡片等元素并打点批注。
- **局域网协作**：同一局域网内可创建房间，多台设备实时同步批注。
- **保留官方功能**：网页文字划选批注、高亮、标签、回复、搜索等官方能力仍然保留；官方账号登录与在线服务代码也保留，可通过官方构建配置启用。

本项目是 Hypothes.is 官方项目的**非官方二次开发版本**。

## 安装

仓库内已包含构建好的扩展目录，下载或克隆后**无需安装 Node、无需构建**。

在 Edge/Chrome 的扩展管理页开启“开发人员模式”，选择“加载解压缩的扩展”，目录选择：

```text
dist/hypothesis-enhanced
```

修改源码后需要重新构建时，再运行：

```sh
./build-all.sh
```

## 局域网协作

默认本地模式开箱即用。需要多台设备共享批注时，打开扩展分享面板中的「局域网共享」即可创建或加入房间。

首次作为房间主机时，浏览器安全策略要求注册一次 Native Messaging 助手：

- **Windows**：在「局域网共享」面板点「下载一键安装脚本」，双击运行下载的 `install-h-local.bat`（需已安装 [Node.js](https://nodejs.org)），然后**完全重启浏览器**。也可手动运行 [`local-h/install-native-host.ps1`](local-h/install-native-host.ps1)。
- **macOS / Linux**：按插件内给出的命令运行 `local-h/install-native-host.sh`，然后完全重启浏览器。

之后即可在插件里一键启动/停止房间。详见 [`local-h/README-native-host.md`](local-h/README-native-host.md)。

修改源码重新构建：`./build-all.sh`（Windows 在 Git Bash 中运行；首次需先 `cd client && node .yarn/releases/yarn-3.6.0.cjs install`）。

## 许可

上游代码遵循 [BSD-2-Clause](client/LICENSE) 许可，本仓库改动同样以 BSD-2-Clause 发布。Hypothesis 是 Hypothes.is Project 的注册商标，本 fork 与官方项目无关。
