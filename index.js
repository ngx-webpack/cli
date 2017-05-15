'use strict';

let ngxWebpack = require('ngx-webpack');
let ngxKarma = require('ngx-karma');
let Config = require('./lib/config');

module.exports = {
  webpack: ngxWebpack,
  karma: ngxKarma,
  Config
};
