/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[fullhash:8].js'
  },
  devtool: 'source-map',
  devServer: {
    client: {
      logging: 'error',
      overlay: true
    },
    port: 9100,
    static: {
      directory: path.join(__dirname, '/build')
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    new HtmlWebpackPlugin({
      title: 'Pattern Container: GraphQL Query Fetch Async'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.jsx']
  }
};
