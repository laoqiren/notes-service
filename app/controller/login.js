'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const ctx = this.ctx;
    const { lover_id, password } = ctx.request.body;

    const lover = await ctx.service.login.login(lover_id, password);

    if (lover) {
      ctx.session.lover_info = {
        lover_id: lover.lover_id,
        lover_name: lover.lover_name,
      };
      ctx.status = 200;
      ctx.body = lover;
      return;
    }

    ctx.status = 401;
    ctx.body = {};
  }
  async queryLoverInfo() {
    const ctx = this.ctx;
    const lover_info = ctx.session.lover_info;

    if (lover_info) {
      ctx.status = 200;
      ctx.body = lover_info;
      return;
    }

    ctx.status = 401;
    ctx.body = {};
  }
}

module.exports = LoginController;
