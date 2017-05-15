'use strict';

let ResolveFile = require('./lib/resolve-file');

module.exports = require('ngx-webpack').webpack({
  tsLint: ResolveFile.getTslintConfig()
});
