/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash:8].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    overlay: true,
    port: 9100,
    stats: 'errors-only'
  },
  mode: 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/i,
        use: 'eslint-loader',
        exclude: /node_modules|packages/
      },
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules|packages/
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Setup Hot Module Replacement, Webpack, ESLint & Babel'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.jsx', '.json']
  }
};
