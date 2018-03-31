module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
    },
};