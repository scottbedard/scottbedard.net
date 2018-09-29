const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');
const purgecssWhitelist = require('./src/scss/whitelist');

// helper function to resolve relative directories and files
const resolve = (...args) => path.resolve(__dirname, ...args);

// PurgeCSS extractor for Tailwind that allows special characters in class names
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
    }
}

module.exports = {
    chainWebpack(config) {
        config
            .module
            .rule('ts')
            .uses
            .get('ts-loader')
            .tap((options) => {
                return {
                    ...options,
                    configFile: resolve('../../tsconfig.json'),
                };
            });

        config
            .plugin('fork-ts-checker')
            .tap((args) => {
                Object.assign(args[0], {
                    tsconfig: resolve('../../tsconfig.json'),
                });
                
                return args;
            });
    },
    configureWebpack: {
        plugins: [
            // tailwind generates a ton of utility classes for us, most
            // of which are not used. purgecss is able to remove them.
            new PurgecssPlugin({
                extractors: [
                    {
                        extensions: ['html', 'js', 'ts', 'vue'],
                        extractor: TailwindExtractor,
                    },
                ],
                paths: glob.sync([
                    resolve('./**/*.vue'),
                ]),
                whitelist: purgecssWhitelist,
            }),
        ],
    },
    pluginOptions: {
        karma: {
            karmaConfig: {
                browsers: [
                    'ChromeHeadless',
                ],
            },
        },
    },
};
