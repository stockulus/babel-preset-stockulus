var semver = require('semver')

var pluginsList = [
  require('babel-plugin-transform-es2015-modules-commonjs'),
  require('babel-plugin-syntax-async-functions'),
  require('babel-plugin-syntax-class-properties'),
  require('babel-plugin-syntax-trailing-function-commas'),
  require('babel-plugin-transform-class-properties'),
  require('babel-plugin-transform-es2015-arrow-functions'),
  require('babel-plugin-transform-es2015-block-scoping'),
  require('babel-plugin-transform-es2015-classes'),
  require('babel-plugin-transform-es2015-computed-properties'),
  require('babel-plugin-check-es2015-constants'),
  require('babel-plugin-transform-es2015-shorthand-properties'),
  require('babel-plugin-transform-es2015-template-literals'),
  require('babel-plugin-transform-es2015-literals'),
  require('babel-plugin-transform-object-assign'),
  require('babel-plugin-transform-object-rest-spread'),
  require('babel-plugin-transform-regenerator'),
  require('babel-plugin-transform-es2015-for-of')
]

if (semver.lt(process.version, '6.0.0')) {
  pluginsList.push(
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'))
}

if (semver.lt(process.version, '5.0.0')) {
  pluginsList.push(require('babel-plugin-transform-es2015-spread'))
}

module.exports = {
  plugins: pluginsList
}
