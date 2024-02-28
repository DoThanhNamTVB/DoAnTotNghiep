module.exports = {
    env: { es2021: true, node: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        allowImportExportEverywhere: true,
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [],
};
