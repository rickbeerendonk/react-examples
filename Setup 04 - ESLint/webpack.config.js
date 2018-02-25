/* global __dirname, module, require */

// Webpack 4 workaround for eslint-loader 1.9.0 build bug.
// Pull request to fix: https://github.com/webpack-contrib/eslint-loader/pull/212
// (TODO: Remove in future versions):
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/site/src',
  entry: './app.jsx',
  output: {
    path: __dirname + '/site/lib',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // Webpack 4 workaround for eslint-loader 1.9.0 build bug.
    // Pull request to fix: https://github.com/webpack-contrib/eslint-loader/pull/212
    // (TODO: Remove in future versions):
    new webpack.LoaderOptionsPlugin({ options: {} })
  ]
};