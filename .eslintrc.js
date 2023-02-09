/*
 * @Date: 2022-10-19 11:26:03
 * @LastEditTime: 2022-10-20 14:30:49
 */

// [如何让 ESLint 同时检测 js 和 ts](http://t.zoukankan.com/yshenhua-p-14255379.html)

// ts 和 js 使用相同的规则
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    // 使用 eslint 推荐规则
    // "eslint:recommended",
    // 启用所有推荐的规则
    // "plugin:@typescript-eslint/recommended",
    // 使用 eslint-plugin-prettier 中的 recommended 规则 (放在最后)
    "plugin:prettier/recommended",
  ],
  // overrides 的配置，可以为某个文件或者某组文件进行覆盖配置。
  // 设置 ts 文件使用 @typescript-eslint/parser 作为解析器，使用 @typescript-eslint 插件以及相关规则而不影响 js 文件
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "prettier"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
  //   parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    // "@typescript-eslint",
    // 使用 eslint-plugin-prettier 对js代码风格进行格式化
    "prettier",
  ],
  rules: {
    // 启用部分规则 (error/2: 启用规则并报错, warn/1: 启用规则并警告, off/0: 关闭规则)
    // '@typescript-eslint/rule-name': 'error',
    "@typescript-eslint/no-inferrable-types": "off",
  },
};
