const Webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 3000,
    open: false, // 在服务器启动后是否打开浏览器
    compress: true, // 为每个静态文件开启 gzip
    progress: true, // 是否将运行进度输出到控制台
    historyApiFallback: true, // 当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容
    // 代理
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
});
