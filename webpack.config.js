var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      "main": './main.js',
      "vendor": ["react"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"       
  }
};