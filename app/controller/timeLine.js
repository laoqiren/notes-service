'use strict';

const Controller = require('egg').Controller;

class TimeLineController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.timeLine.queryTimeLines();
  }
  async create() {
    const ctx = this.ctx;
    const lover_id = ctx.lover_id;
    const newTimeLine = ctx.request.body;

    const timeLine = await ctx.service.timeLine.createTimeLine(newTimeLine, lover_id);
    ctx.status = 201;
    ctx.body = timeLine;
  }
}

module.exports = TimeLineController;
