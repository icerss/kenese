const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator");
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [require("postcss-preset-env")],
              },
            },
          },
        ],
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
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    moduleIds: "deterministic",
    chunkIds: "deterministic",
    splitChunks: {
      automaticNameDelimiter: "-",
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 5000,
      maxSize: 5000,
      minChunks: 1,
      cacheGroups: {
        vendor: {
          name: "vendor",
          minChunks: 2,
          test: /[\\/]node_modules[\\/]|[\\/]gamedata[\\/]|[\\/]renderer[\\/]/,
          filename: "[contenthash:8].chunk.js",
          priority: -50,
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contenthash:8].chunk.css",
    }),
    new OptimizeCssAssetsPlugin(),
    // new WebpackObfuscator({
    //   rotateStringArray: true,
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
  ],
};
