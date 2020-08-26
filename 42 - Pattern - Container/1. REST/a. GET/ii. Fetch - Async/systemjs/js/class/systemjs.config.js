/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  meta: {
    '*.jsx': {
      babelOptions: {
        es2015: true,
        es2016: true,
        es2017: true,
        react: true
      }
    }
  },
  paths: {
    // paths serve as alias
    'npm:': '../../../../../../../../node_modules/',
    'utils:': '../../../../../../../../utils/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'slow-fetch': 'utils:slow-fetch.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    }
  },
  transpiler: 'plugin-babel'
});
