/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.jsx': {
      babelOptions: {
        es2015: true,
        react: true
      }
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../node_modules/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    'prop-types': 'npm:prop-types/prop-types.js',
    'react': './vnext/react.development.js',
    'react-dom': './vnext/react-dom.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    },
    './vnext': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
