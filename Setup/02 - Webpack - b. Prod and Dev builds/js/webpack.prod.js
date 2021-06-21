/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global module */

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  devtool: 'source-map' /* slow, external, production */,
  mode: 'production' /* use prod-version of libs, minification (option: tree-shaking) */
});
