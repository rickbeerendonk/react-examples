/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
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
    'react-router': 'npm:react-router-6/dist/umd/react-router.development.js',
    'react-router-dom':
      'npm:react-router-dom-6/dist/umd/react-router-dom.development.js',
    '@remix-run/router': 'npm:@remix-run/router/dist/router.js',

    ts: 'npm:plugin-typescript',
    typescript: 'npm:typescript'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    },
    ts: {
      main: 'lib/plugin.js'
    },
    typescript: {
      main: 'lib/typescript.js',
      meta: {
        'lib/typescript.js': {
          exports: 'ts'
        }
      }
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    tsconfig: true
  }
});
