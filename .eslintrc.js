module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: [
        'html',
    ],
    rules: {
        'comma-dangle': ['warn', 'always-multiline'],
        'indent': ['warn', 4],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // <- allow debugger during development
        'semi': ['warn', 'always'],
        'quotes': ['warn', 'single'],
    },
};
