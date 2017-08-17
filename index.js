'use strict';

const ResolveFile = require('./lib/resolve-file');
const ngxWebpack = require('@ngx-webpack/core');
const ngxKarma = require('@ngx-webpack/karma');
const Config = require('./lib/config');

module.exports = {
  webpack: function(options) {
    const config = new Config();

    return ngxWebpack.webpack(
      config.calculate(
        Object.assign({ tsLint: ResolveFile.getTslintConfig() }, options)
      )
    );
  },
  karma: function(options) {
    const config = new Config();

    return ngxKarma.karma(
      ResolveFile.getWebpackConfig(),
      { useDlls: config.calculate(options).useDlls }
    )
  },
  Config
};
