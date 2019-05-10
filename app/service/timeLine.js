'use strict';

const Service = require('egg').Service;

class TimeLineService extends Service {
  async queryTimeLines() {
    const ctx = this.ctx;
    const result = await ctx.app.mongo.find('timeLine');
    return result;
  }
  async createTimeLine(newTimeLine, lover_id) {
    const ctx = this.ctx;
    await ctx.app.mongo.insertOne('timeLine', {
      doc: Object.assign({}, newTimeLine, {
        creater: lover_id,
      }),
    });
    return newTimeLine;
  }
}

module.exports = TimeLineService;
