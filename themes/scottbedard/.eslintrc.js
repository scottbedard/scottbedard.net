/* eslint-disable */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    root: true,
    rules: {
        indent: ['error', 4],
        'no-console': isProduction ? 'error' : 'off',
        'no-debugger': isProduction ? 'error' : 'off',
    },
};
