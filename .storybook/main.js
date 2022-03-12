const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  // Next.jsのディレクトリに合わせて変更
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // addonsはデフォルトで導入済みのものを指定(必要に応じて書き換えてOK)
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // TypeScriptの項目で行った「絶対パスインポート」をこちらでも有効化する
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
