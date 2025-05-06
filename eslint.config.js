// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      "semi": ["error", "always"],
      "max-len": ["error", { code: 80, tabWidth: 4 }],
      "quotes": ["error", "double"],
    }
  },
]);
