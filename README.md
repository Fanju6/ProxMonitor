# ProxMonitor

ProxMonitor 是一个用于监控和管理 Proxmox VE 服务器的 Android 应用。它提供了直观的界面来查看和控制您的虚拟化环境。

[![Latest release](https://img.shields.io/github/v/release/Fanju6/ProxMonitor?label=Release&logo=github)](https://github.com/Fanju6/ProxMonitor/releases/latest)
[![Channel](https://img.shields.io/badge/Follow-Telegram-blue.svg?logo=telegram)](https://t.me/ProxMonitor)

<div style="display: flex; justify-content: space-around;">
  <img src="/Screenshots/Screenshot1.png" width="30%" />
  <img src="/Screenshots/Screenshot2.png" width="30%" />
  <img src="/Screenshots/Screenshot3.png" width="30%" />
</div>


## 功能特点

- 🖥️ 资源监控
  - 实时查看节点、虚拟机和存储的状态
  - 监控 CPU、内存、网络和磁盘使用情况
  - 支持图表展示历史数据

- 💻 虚拟机管理
  - 开机/关机操作
  - 通过 noVNC 访问虚拟机控制台
  - 查看虚拟机详细信息和性能指标

- 📊 存储管理
  - 查看存储空间使用情况
  - 监控存储性能
  - 浏览存储内容

- 🔒 安全特性
  - 支持 HTTPS 连接
  - 基于 ticket 的身份验证
  - 安全的凭证存储

## 系统要求

- Android 8.0 (API 26) 或更高版本
- Proxmox VE 7.0 或更高版本
- 网络连接到 Proxmox VE 服务器

## 安装说明

1. 从 [Releases](https://github.com/Fanju6/ProxMonitor/releases) 页面下载最新的 APK
2. 在 Android 设备上安装 APK
3. 启动应用并输入您的 Proxmox VE 服务器信息：
   - 服务器地址 (例如: https://pve.example.com:8006)
   - 用户名 (格式: user@pam 或 user@pve)
   - 密码

## 使用说明

### 登录
1. 输入服务器地址、用户名和密码
2. 点击登录按钮
3. 登录成功后会自动保存凭证

### 资源监控
- 主页面显示所有节点、虚拟机和存储的概览
- 点击任意资源可查看详细信息
- 支持下拉刷新更新数据

### 虚拟机管理
- 点击虚拟机卡片进入详情页面
- 使用顶部工具栏的按钮进行开机/关机操作
- 点击控制台图标打开 noVNC 远程访问

### 存储管理
- 在存储详情页面可查看使用情况
- 支持查看存储内容列表
- 提供多个时间范围的性能数据图表

## 技术栈

- 使用 Kotlin 和 Jetpack Compose 开发
- 遵循 Material Design 3 设计规范
- 采用 MVVM 架构
- 使用 Hilt 进行依赖注入
- 使用 Retrofit 进行网络请求
- 使用 DataStore 进行数据持久化


## 致谢

- [Proxmox VE](https://www.proxmox.com/en/proxmox-ve) - 优秀的虚拟化平台
- [noVNC](https://novnc.com/) - HTML5 VNC 客户端
