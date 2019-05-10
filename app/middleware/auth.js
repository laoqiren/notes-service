'use strict';

module.exports = () => {
  return async function authStudent(ctx, next) {
    /*
    const lover = ctx.session.lover_info;
    if (lover_info && lover_info.lover_id) {
      ctx.lover_id = lover_info.lover_id;
      await next();
      return;
    }
    */
    const hasLogin = true;

    if (hasLogin) {
      ctx.lover_id = 'luo';
      await next();
      return;
    }

    ctx.status = 401;
    ctx.body = {};
  };
};
