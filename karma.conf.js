'use strict';

let ResolveFile = require('./lib/resolve-file');
let Config = require('./lib/config');
const config = new Config();

let karmaConfig = require('@ngx-webpack/karma')
  .karma(ResolveFile.getWebpackConfig(), config.calculate());

module.exports = (config) => {
  config.set(karmaConfig);
};
