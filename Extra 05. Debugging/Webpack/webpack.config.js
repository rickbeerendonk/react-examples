module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: __dirname + '/lib',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};