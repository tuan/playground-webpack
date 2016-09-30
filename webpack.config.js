var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      "main": ["./main.js"]
  },
  output: {
    libraryTarget: "this",
    library: "TuanLibrary",
    path: path.join(__dirname, "dist"),
    filename: "[name].js"       
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
  }
};