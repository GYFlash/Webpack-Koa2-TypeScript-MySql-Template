/**
 * @desc 统一的try/catch错误捕捉入口
 * @author Daker(Daker.zhou@gmail.com)
 */

export default async (ctx: any, next: any) => {
  try {
    await next();
  } catch (err) {
    // will only respond with JSON
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      success: false,
      message: err.message
    };
  }
};
