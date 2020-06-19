module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 9,
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
    ],
    rules: {
        "no-empty-pattern": 0,
        "no-unused-vars": 0,
        "react/prop-types": 2,
        "react/require-default-props": 2,
        "react/no-unused-prop-types": 1,
    },
};
