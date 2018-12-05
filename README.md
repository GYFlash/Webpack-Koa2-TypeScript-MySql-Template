# Webpack-Koa2-TypeScript-MySql-Template

## 介绍
使用webpack搭建基于typescript的node开发环境template

## 选型
- `Typescript` 项目使用的主语言，为前端开发添加强类型支持，能在编码过程中避免很多问题。
- `Koa` 应用比较广泛。没有附加多余的功能，中间件即插即用。
- `Webpack` 打包工具，开发中热加载。
- `ts-node` 用来直接执行ts脚本。
- `start-server-webpack-plugin` 很关键的webpack插件，能够在编译后直接启动服务，并且支持signal模式的热加载，配合webpack/hot/signal很好用。

## Build Setup
```
# Git Clone
git clone https://github.com/Daker-china/Webpack-Koa2-TypeScript-MySql-Template.git


# Install dependencies
npm install

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

```

## 目录结构
```
├── config                      // webpack配置
├── scripts                     // 构建服务
├── server                      // 生产目录
│   ├── app.ts                  // 项目入口文件
│   ├── config                  // 全局配置参数
│   ├── controller              // 控制层
│   ├── middleware              // 中间件
│   ├── models                  // 模型层
│   ├── routers                 // 路由层        
│   └── utils                   // 工具类
└── typings                     // 外部模块声明
├── package.json
├── tsconfig.json
├── tslint.json
├── README.md
```