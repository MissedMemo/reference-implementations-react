const { resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SOURCE_DIR = resolve("src");

module.exports = {
  output: {
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss?$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html.template",
    }),
  ],
};
