'use strict';

let ngxWebpack = require('@ngx-webpack/core');
let ngxKarma = require('@ngx-webpack/karma');
let Config = require('./lib/config');

module.exports = {
  webpack: ngxWebpack,
  karma: ngxKarma,
  Config
};
