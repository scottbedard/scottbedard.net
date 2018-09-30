/* eslint-disable no-unused-vars */
const path = require('path');

// constants
const isTesting = process.env.NODE_ENV === 'test';
const isProduction = process.env.NODE_ENV === 'production';

// helper function to resolve relative directories and files
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
    pluginOptions: {
        karma: {
            files: [
                resolve('./tests/unit/setup.js'),
                resolve('./tests/unit/**/*.spec.js'),
            ],
            karmaConfig: {
                browsers: [
                    'ChromeHeadless',
                ],
                frameworks: [
                    'mocha',
                    'sinon-chai',
                ],
            },
        },
    },
    runtimeCompiler: isTesting,
};
