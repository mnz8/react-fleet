# react 的工作台

1. 使用 webpack 构建
2. 基于 react v18, react-router-dom v6
3. 支持 typescript , es 支持最新
4. 支持 less
5. prettier,stylelint,eslint 编码规范

## webpack

webpack webpack-cli 命令行工具 webpack-dev-server webpack 开发服务器

## typescript

typescript ts-loader tsconfig-paths-webpack-plugin 将 tsconfig 中的 paths 配置同步到 webpack 中

## html-webpack-plugin

1. 创建 html 入口文件
2. 引入外部资源如 script、link

## lint and formatter

@typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-formatter-pretty eslint-plugin-babel eslint-plugin-jest eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unicorn prettier husky lint-staged

- verifyCommit.mjs chalk,os-locale .mjs: ES module (chalk5.0.0 不支持在 nodejs 中 require() 导入)
