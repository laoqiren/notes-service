'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(lover_id, password) {
    const ctx = this.ctx;
    const lover = await ctx.app.mongo.findOne('lover', {
      query: {
        lover_id,
        pwd: password,
      },
    });
    return lover;
  }
}

module.exports = LoginService;
