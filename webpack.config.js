var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      "main": ["./main.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",       
    pathinfo: true
  },
  module: {
        loaders: [
            { test: /\.json$/, loader: "file" },
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a valid name to reference
              query: {
                presets: ['es2015']
              }
            }
        ]
  },
  target: "web"
};