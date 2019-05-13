'use strict';

const Controller = require('egg').Controller;

class LifeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const category = ctx.query.category;
    ctx.body = await ctx.service.life.queryArticles(category);
  }
  async create() {
    const ctx = this.ctx;
    const lover_id = ctx.lover_id;
    const newArticle = ctx.request.body;

    const article = await ctx.service.life.createArticle(newArticle, lover_id);
    ctx.status = 201;
    ctx.body = article;
  }
}

module.exports = LifeController;
