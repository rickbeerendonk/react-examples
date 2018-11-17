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
    'future:': '../../../../../future_node_modules/',
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    //react: 'npm:react/umd/react.development.js',
    react: 'future:react/umd/react.development.js',
    'react-cache': 'future:react-cache/cjs/react-cache.development.js',
    //'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-dom': 'future:react-dom/umd/react-dom.development.js',
    //scheduler: 'npm:scheduler/umd/scheduler.development.js'
    scheduler: 'future:scheduler/cjs/scheduler.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    }
  },
  transpiler: 'plugin-babel'
});
