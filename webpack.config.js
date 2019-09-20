var webpack = require("webpack");
var path = require("path");
var libraryName = "nuoTrack";
var outputFile = libraryName + ".js";

var env = process.env.WEBPACK_ENV;

module.exports = {
  mode: "development",
  entry: __dirname + "/index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   enforce: "pre",
      //   use: [
      //     {
      //       loader: "eslint-loader"
      //     }
      //   ]
      // }
    ]
  }
};
