module.exports = {
  plugins: ["react"],
  extends: [
    "@noplan-inc/eslint-config-typescript",
    "plugin:react/recommended",
    "next/core-web-vitals"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/hook-use-state': 2,
  },
};
