module.exports = {
  context: __dirname + '/site/src',
  entry: './app.jsx',
  output: {
    path: __dirname + '/site/lib',
    filename: 'bundle.js'
  },
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