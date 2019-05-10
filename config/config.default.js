/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1557304976418_4132';

  // add your middleware config here
  config.middleware = [];

  config.static = {
    dir: path.join(appInfo.baseDir, 'client/build'),
    prefix: '/',
  };

  config.mongo = {
    client: {
      host: '106.14.212.157',
      port: '27017',
      name: 'yes',
      user: 'yes',
      password: 'yes',
    },
  };

  config.security = {
    csrf: false,
  };

  config.session = {
    key: 'love_notes',
    maxAge: 48 * 3600 * 1000, // 2 天
    httpOnly: true,
    encrypt: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
