module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
    parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', "prettier"],
  settings: {
    react: {
      version: 'detect'
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "prettier/prettier": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "react/prop-types": ["off"],
    "react/jsx-sort-props": [
      "warn",
      { callbacksLast: true, noSortAlphabetically: false },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unsafe-member-access": ["off"],
    "@typescript-eslint/no-unsafe-argument": ["off"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-unsafe-assignment": "off"
  },
}
