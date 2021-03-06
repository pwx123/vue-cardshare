module.exports = {
  extends: [
    'plugin:vue/recommended',
    'standard',
    "eslint:recommended"
  ],
  plugins: ['vue'],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "space-before-function-paren": ["error", "never"],
    "no-new": 0,
    "no-console": 0,
    "no-undef": 0
  }
}
