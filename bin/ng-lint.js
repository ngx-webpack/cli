#! /usr/bin/env node
'use strict';

let tslintRunner = require('tslint/lib/runner').run;
let ResolveFile = require('../lib/resolve-file');

let options = {
  config: ResolveFile.getTslintConfig(),
  files: [ 'src/**/*.ts' ],
  fix: false,
  force: false,
  format: 'prose',
  init: false,
  typeCheck: false,
  version: false
};
tslintRunner(options, console).then((status) => {
  if (status !== 0) {
    process.exit(1);
  }
});
