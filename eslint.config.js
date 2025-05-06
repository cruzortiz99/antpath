// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      "semicolon": ["error", "always"],
      "quotes": ["error", "double"],
      "tabWidth": ["error", 2],
    }
  },
]);
