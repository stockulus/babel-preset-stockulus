babel-preset-stockulus
======

[![npm Package](https://img.shields.io/npm/dm/babel-preset-stockulus.svg)](https://www.npmjs.com/package/babel-preset-stockulus) [![npm Package](https://img.shields.io/npm/v/babel-preset-stockulus.svg)](https://www.npmjs.com/package/babel-preset-stockulus) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![license](https://img.shields.io/npm/l/babel-preset-stockulus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

get react-native feeling in node development, inspired by https://github.com/rtsao/babel-preset-es2015-node

## Install
```sh
$ npm install --save-dev babel-preset-stockulus
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["stockulus"]
}
```

### Via CLI

```sh
$ babel script.js --preset stockulus
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["stockulus"]
});
```
---
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/stockulus)
