module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', "plugin:import/typescript"],
    extends: ["standard-with-typescript", "prettier"],
    rules: {
        "no-console": 1,
    }
}
