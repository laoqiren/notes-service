/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
const keys = require('./keys.config');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + keys.cookie_sign;

  // add your middleware config here
  config.middleware = [];

  config.static = {
    dir: path.join(appInfo.baseDir, 'client/build'),
    prefix: '/',
  };

  config.mongo = {
    client: keys.mongo,
  };

  config.session = {
    key: keys.sessionKey,
    maxAge: 48 * 3600 * 1000, // 2 天
    httpOnly: true,
    encrypt: true,
  };

  config.security = {
    domainWhiteList: [ 'localhost:3000' ],
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    credentials: true,
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
