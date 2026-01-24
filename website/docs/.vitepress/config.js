export default {
  base: "/ProxMonitorDocs/",
  title: 'ProxMonitor',
  description: 'Proxmox VE 服务器监控和管理的 Android 应用',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/Fanju6/ProxMonitor/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '使用说明', link: '/guide/usage' }
          ]
        },
        {
          text: '功能',
          items: [
            { text: '资源监控', link: '/guide/monitoring' },
            { text: '虚拟机管理', link: '/guide/vm-management' },
            { text: '存储管理', link: '/guide/storage' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ProxMonitor'
    }
  }
} 
