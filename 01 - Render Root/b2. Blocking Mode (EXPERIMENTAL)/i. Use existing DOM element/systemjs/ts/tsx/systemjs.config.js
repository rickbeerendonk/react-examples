/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  paths: {
    // paths serve as alias
    'npm:': '../../../../../../node_modules/'
  },
  map: {
    react: 'npm:react-0.0.0-experimental/umd/react.development.js',
    'react-dom':
      'npm:react-dom-0.0.0-experimental/umd/react-dom.development.js',

    ts: 'npm:plugin-typescript',
    typescript: 'npm:typescript'
  },
  packages: {
    '.': {
      defaultExtension: 'tsx'
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
