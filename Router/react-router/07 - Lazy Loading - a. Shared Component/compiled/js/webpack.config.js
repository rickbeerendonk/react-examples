/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    port: 9100
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Router - Lazy Loading (Shared Resource)'
    }),
    new webpack.NamedModulesPlugin(),
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
