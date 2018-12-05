import * as Router from 'koa-router';

const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = {
    name: 'Koa2-TypeScript-Template',
    version: '1.0.0',
    author: 'Daker-china<daker.zhou@gmail.com>',
    site: 'https://daker.xin',
    github: 'https://github.com/daker-china',
    powered: ['Nodejs', 'Koa2', 'TypeScript']
  };
});

export { router };

