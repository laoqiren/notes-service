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

    if (article) {
      ctx.status = 201;
      ctx.body = article;
    } else {
      ctx.status = 500;
      ctx.body = {};
    }
  }
  async update() {
    const ctx = this.ctx;
    const { _id, article } = ctx.request.body;

    const updatedArticle = await ctx.service.life.updateArticle(_id, article);

    if (updatedArticle) {
      ctx.status = 200;
      ctx.body = updatedArticle;
    } else {
      ctx.status = 500;
      ctx.body = {};
    }
  }
  async delete() {
    const ctx = this.ctx;
    const _id = ctx.request.body._id;

    const deletedArticle = await ctx.service.life.deleteArticle(_id);

    if (deletedArticle) {
      ctx.status = 200;
      ctx.body = deletedArticle;
    } else {
      ctx.status = 500;
      ctx.body = {};
    }
  }
}

module.exports = LifeController;
