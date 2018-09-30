const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
const purgecssWhitelist = require('./src/scss/whitelist');

// constants
const isTesting = process.env.NODE_ENV === 'test';

// helper function to resolve relative directories and files
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
    configureWebpack: {
        plugins: [
            // tailwind generates a ton of utility classes for us, most
            // of which are not used. purgecss is able to remove them.
            new PurgecssPlugin({
                extractors: [
                    {
                        extensions: ['htm', 'js', 'vue'],
                        extractor: class {
                            static extract(content) {
                                // allow tailwind special characters in classes
                                return content.match(/[A-z0-9-:\/]+/g) || [];
                            }
                        },
                    },
                ],
                paths: glob.sync([
                    resolve('./**/*.htm'),
                    resolve('./**/*.vue'),
                ]),
                whitelist: purgecssWhitelist,
            }),
        ],
    },
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
