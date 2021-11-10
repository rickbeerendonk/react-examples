/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

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
    'npm:': '../../../../../../node_modules/'
  },
  map: {
    history: 'npm:history/umd/history.development.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-router': 'npm:react-router-6/umd/react-router.development.js',
    'react-router-dom':
      'npm:react-router-dom-6/umd/react-router-dom.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    }
  },
  transpiler: 'plugin-babel'
});
