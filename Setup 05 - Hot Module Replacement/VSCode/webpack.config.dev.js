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
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre', 
        test: /\.jsx?$/, 
        loader: 'eslint-loader', 
        exclude: /node_modules/
      },
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  }
};