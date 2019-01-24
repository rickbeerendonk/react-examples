/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global module */

module.exports = env => {
  return require(`./webpack.${env}.js`);
};
