'use strict';

let ResolveFile = require('./lib/resolve-file');
let Config = require('./lib/config');
const config = (new Config()).calculate();

let karmaConfig = require('@ngx-webpack/karma')
  .karma(ResolveFile.getWebpackConfig(), { useDlls: config.useDlls });

module.exports = (config) => {
  config.set(karmaConfig);
};
