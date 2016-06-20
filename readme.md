babel-preset-stockulus
======

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
Feedback welcome:
Twitter: [@stockulus](https://twitter.com/stockulus)
