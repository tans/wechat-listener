# wechat-listener
监听微信消息并实时转发 - 主要通过电脑挂机机器人， 收集微信群的业务数据， 解决常见的信息重复录入问题。


## 配置

```
cp .env.example .env

MATCH_REG=正则匹配文本
REMOTE_API=回传服务器地址
```


## 运行

1. 安装微信 [3.9.2.23](https://github.com/tom-snow/wechat-windows-versions/releases/download/v3.9.2.23/WeChatSetup-3.9.2.23.exe)

2. 安装node.js 环境 v16以上

3. cmd中执行以下命令

```
npm install
node index.js
```



## 扩展

源码只有50行左右

目前我们业务仅需要监听特定格式的文本数据， 后面可以参考wechaty文档， 实现应答功能。
