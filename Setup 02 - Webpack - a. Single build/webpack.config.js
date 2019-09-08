/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.[hash:8].js'
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
    new CopyWebpackPlugin([{ from: 'public' }]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Setup Webpack & Babel'
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
