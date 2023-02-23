module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "prettier",
  ],
  rules: {
    "import/order": 2,
    "import/no-default-export": 2,
    "no-new-object": 2,
    "no-new-func": 2,
    "@typescript-eslint/consistent-type-imports": [
      2,
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
};
