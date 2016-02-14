module.exports = {
  entry: './site/src/app.jsx',
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