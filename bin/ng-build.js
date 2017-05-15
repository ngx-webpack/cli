#! /usr/bin/env node
'use strict';

process.env.NODE_ENV = 'production';
let rimraf = require('rimraf');
let webpack = require('webpack');
let ResolveFile = require('../lib/resolve-file');

console.log('> webpack');
let webpackConfig = ResolveFile.getWebpackConfig();

rimraf.sync(webpackConfig.output.path);
let compiler = webpack(webpackConfig);

compiler.run((e) => {
  if (e) {
    console.error(e);
    process.exit(1);
  }
});
