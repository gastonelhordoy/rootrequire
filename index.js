/**
 * Require relative to your project home directory.
 */
/*

// Usage:
// Anywhere in your project:

var root = require('root'),
  someLib = rootRequire('lib/some-lib.js');

console.log(root); // /path/to/your/project/dir

*/

'use strict';

var path = require('path');
var root = path.normalize(__dirname + '/../..');

module.exports = function (fromPath) {
  return require(path.resolve(root, fromPath));
};
module.exports.root = root;

