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
    'npm:': '../../../../node_modules/',
    'npm-unstable:': '../../../../node_modules_unstable/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    react: 'npm:react/umd/react.development.js',
    //'react-cache': 'npm:react-cache/umd/react-cache.development.js',
    'react-cache': 'npm-unstable:react-cache/umd/react-cache.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    //scheduler: 'npm:scheduler/umd/scheduler.development.js'
    scheduler: 'npm-unstable:scheduler/cjs/scheduler.development.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    }
  },
  transpiler: 'plugin-babel'
});
