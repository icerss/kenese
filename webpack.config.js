const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/renderer/init.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[contenthash:8].chunk.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env"],
          // },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: {
      automaticNameDelimiter: "-",
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 10000,
      maxSize: 10000,
      minChunks: 1,
      cacheGroups: {
        gamedata: {
          test: /[\\/]gamedata[\\/]/,
          filename: "[contenthash:8].game.js",
          priority: -10,
        },
        renderer: {
          test: /[\\/]node_modules[\\/]|[\\/]renderer[\\/]/,
          filename: "[contenthash:8].renderer.js",
          priority: -10,
        },
        default: {
          minChunks: 2,
          filename: "[contenthash:8].chunk.js",
          priority: -50,
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
};
