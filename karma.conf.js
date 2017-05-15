'use strict';

let ResolveFile = require('./lib/resolve-file');
let karmaConfig = require('ngx-webpack').karma(ResolveFile.getWebpackConfig());

module.exports = (config) => {
  config.set(karmaConfig);
};
