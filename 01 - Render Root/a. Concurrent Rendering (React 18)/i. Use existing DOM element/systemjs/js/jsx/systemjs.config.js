/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  paths: {
    // paths serve as alias
    'npm:': '../../../../../../node_modules/'
  },
  map: {
    react: 'npm:react-18/umd/react.development.js',
    'react-dom/client': 'npm:react-dom-18/umd/react-dom.development.js',
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
    jsx: 'react',
    noImplicitAny: true
  }
});
