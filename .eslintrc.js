module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["react", "jest", "jest-dom", "react-hooks", "@typescript-eslint"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
