/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules|packages/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Setup Webpack & Babel'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
