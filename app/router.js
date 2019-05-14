'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const authMiddleware = app.middleware.auth();

  router.get('/', controller.home.index);

  // 登陆相关
  router.post('login', '/api/login', controller.login.login); // 登陆
  router.get('loverInfo', '/api/queryLoverInfo', controller.login.queryLoverInfo); // 根据cookie获取身份信息

  // 时光穿梭机
  router.resources('timeLines', '/api/timeLine', authMiddleware, controller.timeLine);

  // 生活点滴
  router.get('life', '/api/life', controller.life.index);
  router.post('life', '/api/life', authMiddleware, controller.life.create);
  router.post('life', '/api/updateArticle', authMiddleware, controller.life.update);
  router.post('life', '/api/deleteLifeArticle', authMiddleware, controller.life.delete);
};
