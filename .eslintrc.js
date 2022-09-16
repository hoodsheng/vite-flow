module.exports = {
  // 环境：针对哪些环境的语法
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 集成哪些规则，别人写好的，直接拿来用
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier",
  ],
  parser: "vue-eslint-parser", // 解析 .vue⽂件
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  // 自定义规则
  rules: {},
};
