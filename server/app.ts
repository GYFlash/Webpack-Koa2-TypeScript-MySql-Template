import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as http from 'http';
import { router } from './routers/index';
import { error, cors } from './middleware';

const app = new Koa();

app
  .use(bodyparser())  // 使用ctx.body解析
  .use(error) // 全局错误统一处理
  .use(cors)  // 跨域配置
  .use(router.routes())
  .use(router.allowedMethods());

// app.callback() 会返回一个能够通过http.createServer创建server的函数，类似express和connect。
let currentApp = app.callback();
// 创建server
const server = http.createServer(currentApp);

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Press CTRL-C to stop \n');
});

// 热加载
if (module.hot) {
  // 监听./app.ts
  module.hot.accept('./app.ts', () => {
    // 如果有改动，就使用新的app来处理请求
    server.removeListener('request', currentApp);
    currentApp = app.callback();
    server.on('request', currentApp);
  });
}
// 使用 tsc 编译 打包

// app.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000');
//   console.log('Press CTRL-C to stop \n');
// });

// 使用 webpack 编译 打包

// app.callback() 会返回一个能够通过http.createServer创建server的函数，类似express和connect。
// let currentApp = app.callback();
// // 创建server
// const server = http.createServer(currentApp);

// server.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000');
//   console.log('Press CTRL-C to stop \n');
// });

// // 热加载
// if (module.hot) {
//   // 监听./app.ts
//   module.hot.accept('./app.ts', () => {
//     // 如果有改动，就使用新的app来处理请求
//     server.removeListener('request', currentApp);
//     currentApp = app.callback();
//     server.on('request', currentApp);
//   });
// }