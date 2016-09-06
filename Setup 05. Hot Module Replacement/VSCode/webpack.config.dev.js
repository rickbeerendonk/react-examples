var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',  
    './site/src/app.jsx'
  ],
  output: {
    path: __dirname + '/site/lib',
    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map',
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],    
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};