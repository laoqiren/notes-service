'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.redirect('/index.html');
  }
}

module.exports = HomeController;
