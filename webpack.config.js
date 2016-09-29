var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      "main": ["./main.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"       
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
  }
};