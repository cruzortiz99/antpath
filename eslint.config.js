// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
    rules: {
      semi: ["error", "always"],
      "max-len": ["error", { code: 100, tabWidth: 4 }],
      quotes: ["error", "double"],
      "prettier/prettier": ["off"],
    },
  },
]);
