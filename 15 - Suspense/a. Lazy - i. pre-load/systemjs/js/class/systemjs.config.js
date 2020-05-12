/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

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
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react-0.0.0-experimental/umd/react.development.js',
    'react-dom':
      'npm:react-dom-0.0.0-experimental/umd/react-dom.development.js',
    //scheduler: 'npm:scheduler/umd/scheduler.development.js'
    scheduler: 'npm:scheduler/cjs/scheduler.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    }
  },
  transpiler: 'plugin-babel'
});
