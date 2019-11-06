/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global module */

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  devServer: {
    inline: true,
    contentBase: './build',
    port: 9100
  },
  devtool: 'eval-source-map' /* fast, inline, no production */,
  mode: 'development'
});
