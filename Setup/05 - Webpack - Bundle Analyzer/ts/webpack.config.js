/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/app.tsx'],
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
        test: /\.[jt]sx?$/,
        exclude: /node_modules|packages/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      title: 'Setup Fast Refresh, Webpack & TypeScript'
    }),
    new ReactRefreshWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  }
};
