/**
 * @desc 跨域资源共享
 * @author Daker(Daker.zhou@gmail.com)
 */

export default async (ctx: any, next: any) => {
  // set Header
  const origin = ctx.origin || '';
  if (['http://localhost:3000'].includes(origin)) {
    ctx.set('Access-Control-Allow-Origin', origin);
  }
  ctx.set('Access-Control-Allow-Headers', `Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With`);
  ctx.set('Access-Control-Allow-Methods', 'PUT,PATCH,POST,GET,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Max-Age', '1728000');
  ctx.set('Content-Type', 'application/json;charset=utf-8');
  ctx.set('X-Powered-By', 'Nodepress 1.0.0');

  // OPTIONS request
  if (Object.is(ctx.method, 'OPTIONS')) {
    return ctx.status = 200;
  }
  // Pass the request to the next middleware function
  await next();
};
