'use strict';

module.exports = () => {
  return async function authLover(ctx, next) {
    const lover_info = ctx.session.lover_info;
    if (lover_info && lover_info.lover_id) {
      ctx.lover_id = lover_info.lover_id;
      await next();
      return;
    }

    ctx.status = 401;
    ctx.body = {};
  };
};
