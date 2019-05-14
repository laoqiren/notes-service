'use strict';

const Service = require('egg').Service;
const mongodb = require('mongodb');

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
      return null;
    }
    return newArticle;
  }
  async updateArticle(_id, data) {
    const ctx = this.ctx;
    let result;
    try {
      result = await ctx.app.mongo.findOneAndUpdate('life', {
        filter: {
          _id: mongodb.ObjectID(_id),
        },
        update: {
          $set: data,
        },
      });
    } catch (err) {
      return null;
    }
    return result;
  }
  async deleteArticle(_id) {
    const ctx = this.ctx;
    let result;
    try {
      result = await ctx.app.mongo.findOneAndDelete('life', {
        filter: {
          _id: mongodb.ObjectID(_id),
        },
      });
    } catch (err) {
      return null;
    }
    return result;
  }
}

module.exports = LifeService;

