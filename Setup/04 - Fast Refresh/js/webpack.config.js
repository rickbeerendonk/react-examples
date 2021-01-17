/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

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
        exclude: /node_modules|packages/,
        use: 'eslint-loader'
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules|packages/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel']
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Setup Fast Refresh, Webpack, ESLint & Babel'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  optimization: {
    moduleIds: 'named'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
