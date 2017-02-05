// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// use the vue-router plugin
require('src/app/plugins/router');

// require all test files (files that ends with .spec.js)
var testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all files that should be included in code coverage
let coverageBlacklist = [
    './app/boot.js',
    './app/plugins/resources.js',
];

var srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)(.*)(\.vue$|\.js$)/);
srcContext.keys().filter(file => coverageBlacklist.indexOf(file) === -1).forEach(srcContext);
