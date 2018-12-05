/**
 * @desc token验证
 * @author Daker(Daker.zhou@gmail.com)
 */

import * as jwt from 'jsonwebtoken';
import CONF from '../config';

export default async (ctx: any, next: any) => {

  const token = ctx.request.header.authorization;

  if (!token) {
    ctx.throw(401, 'No token detected.');
  }

  let tokenContent: string | object | undefined;
  try {
    tokenContent = await jwt.verify(token, CONF.TOKEN);
    // Todo 缓存到 redis
  } catch (err) {
    // Token 过期
    if (err.name === 'TokenExpiredError') {
      ctx.throw(401, 'Token expried');
    }
    // Token 验证失败
    ctx.throw(401, 'Invalid Token');
  }

  ctx.token = tokenContent;
  return await next();
};
