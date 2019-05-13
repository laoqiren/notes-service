'use strict';

const Service = require('egg').Service;

class LifeService extends Service {
  async queryArticles(category) {
    const ctx = this.ctx;
    const result = await ctx.app.mongo.find('life', {
      query: {
        category,
      },
    });
    return result;
  }
  async createArticle(newArticle, lover_id) {
    const ctx = this.ctx;
    try {
      await ctx.app.mongo.insertOne('life', {
        doc: Object.assign({}, newArticle, {
          creater: lover_id,
        }),
      });
    } catch (err) {
      return {};
    }
    return newArticle;
  }
}

module.exports = LifeService;

