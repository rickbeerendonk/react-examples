/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

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
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'object-assign': 'npm:object-assign/index.js',
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react/umd/react.development.js',
    'react/jsx-runtime': 'npm:react/cjs/react-jsx-dev-runtime.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
