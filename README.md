# @ngx-webpack/cli
[![Dependency Status](https://david-dm.org/ngx-webpack/cli.svg)](https://david-dm.org/ngx-webpack/cli)
[![devDependency Status](https://david-dm.org/ngx-webpack/cli/dev-status.svg)](https://david-dm.org/ngx-webpack/cli?type=dev)

### Installation

```bash
npm install @ngx-webpack/cli --save-dev
```

### Usage

Add the following scripts to ```package.json``` (`postinstall` is only needed when you use Webpack dlls).

```json
{
  "scripts": {
    "postinstall": "ngx-install",
    "build": "ngx-build",
    "deploy": "ngx-deploy",
    "lint": "ngx-lint",
    "start": "ngx-start",
    "test": "ngx-test",
    "test-watch": "ngx-test --watch"
  }
}
```

Create your configuration file named `ngx-wepack.json`.

```json
{
  "port": 4000,
  "aot": true,
  "styleFormat": "sass",
  "templateFormat": "pug",
  "useDlls": true,
  "liveReload": true,
  "indexHtml": true,
  "vendors": [
    "@angular/common",
    "@angular/core",
    "@angular/platform-browser",
    "@angular/http",
    "@angular/forms",
    "@angular/router"
  ]
}
```

The available configurations and their desriptions are available in the 
[readme of `@ngx-webpack/core`](https://github.com/ngx-webpack/core).
