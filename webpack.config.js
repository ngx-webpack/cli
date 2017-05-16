'use strict';

let ResolveFile = require('./lib/resolve-file');

module.exports = require('@ngx-webpack/core').webpack({
  tsLint: ResolveFile.getTslintConfig()
});
