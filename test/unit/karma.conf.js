var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('../../build/webpack.base.conf');
var utils = require('../../build/utils');
var webpack = require('webpack');
var projectRoot = path.resolve(__dirname, '../../');

var webpackConfig = merge(baseConfig, {
    module: {
        loaders: utils.styleLoaders(),
    },
    devtool: '#inline-source-map',
    vue: {
        loaders: {
            js: 'isparta',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../../config/test.env'),
        }),
    ],
});

// no need for app entry during tests
delete webpackConfig.entry;

// make sure isparta loader is applied before eslint
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || [];
webpackConfig.module.preLoaders.unshift({
    test: /\.js$/,
    loader: 'isparta',
    include: path.resolve(projectRoot, 'src'),
});

// only apply babel for test files when using isparta
webpackConfig.module.loaders.some(function (loader, i) {
    if (loader.loader === 'babel') {
        loader.include = path.resolve(projectRoot, 'test/unit');
        return true;
    }
});

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
    });
};
