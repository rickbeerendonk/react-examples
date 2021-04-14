/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        es2015: true
      }
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../../node_modules/',
    'npm-unstable:': '../../../../../node_modules_unstable/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm-unstable:react/umd/react.development.js',
    'react-dom': 'npm-unstable:react-dom/umd/react-dom.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
