'use strict';

let ResolveFile = require('./lib/resolve-file');
let Config = require('./lib/config');
const config = new Config();

module.exports = require('@ngx-webpack/core').webpack(config.calculate({
  tsLint: ResolveFile.getTslintConfig()
}));
