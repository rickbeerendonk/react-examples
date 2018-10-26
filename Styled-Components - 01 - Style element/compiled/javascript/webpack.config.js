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
    port: 9100
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules|packages/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules|packages/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Styled-Components - Style element'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
