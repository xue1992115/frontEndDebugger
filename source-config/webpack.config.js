const path = require("path");
const webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",
  // 生成的module是使用eval进行包裹的，并且声称的文件比较快，但是不能没有进行源码的映射
  // devtool: 'eval',
  // 配置之后可进行源码的映射
  // devtool: 'eval-source-map',
  // source-map文件会单独的生成
  // devtool: "source-map",
  // hidden表示的是不进行关联，可用于线上生产的环境
  // devtool: "hidden-source-map",
  // 通过dataUrl的方式内联在bundle.js文件中
  // devtool: "inline-source-map",
  // devtool: "cheap-source-map",
  // devtool: "cheap-module-source-map",
  devtool: "nosources-cheap-module-source-map",
  // 其他的配置
  mode: "development",
  devServer: {
    static: {
      directory: './',
    },
    hot: true,
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
    ],
  },
};
