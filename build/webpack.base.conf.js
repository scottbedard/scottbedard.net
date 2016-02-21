var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main.js',
        vendors: [
            'moment',
            'vue',
            'vue-resource',
            'vue-router',
        ],
    },
    output: {
        path: path.resolve(__dirname, '../assets'),
        publicPath: '/themes/scottbedard/assets/',
        filename: '[name].js',
    },
    resolve: {
        root: path.resolve(__dirname, '../src'),
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
        },
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, '../src/scss'),
            path.resolve(__dirname, '../node_modules'),
        ],
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.js$/,
                loader: 'babel', // babel!eslint
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]',
                },
            },
        ],
    },
    vue: {
        loaders: {
            js: 'babel', // babel!eslint
        },
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ],
    // eslint: {
    //     formatter: require('eslint-friendly-formatter'),
    // },
};
