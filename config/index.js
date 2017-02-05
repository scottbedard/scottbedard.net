var path = require('path');

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../pages/index.htm'),
        assetsRoot: path.resolve(__dirname, '../assets'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/themes/scottbedard/assets/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
    },
};
