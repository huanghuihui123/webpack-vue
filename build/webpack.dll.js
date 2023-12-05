const path = require("path");
const webpack = require("webpack");
const packages = require("../package.json"); // 从package.json文件中获取依赖

let dependencies = Object.keys(packages.dependencies) || []; // 获取依赖
if (dependencies.length) {
  dependencies = dependencies.filter((item) => item !== "vue") || [];
}

module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: dependencies,
  },
  output: {
    path: path.resolve(__dirname, "../dll"), // 打包后文件输出的位置
    filename: "[name].dll.js",
    library: "[name]_library",
    // 这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "../dll/[name]-manifest.json"),
      name: "[name]_library",
      context: __dirname,
    }),
  ],
};