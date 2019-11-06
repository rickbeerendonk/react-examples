/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global SystemJS */

SystemJS.config({
  paths: {
    // paths serve as alias
    'npm:': '../../../../../node_modules/',
    'npm_unstable:': '../../../../../node_modules_unstable/'
  },
  map: {
    react: 'npm_unstable:react/umd/react.development.js',
    'react-dom': 'npm_unstable:react-dom/umd/react-dom.development.js',
    'react-interactions/focus':
      'npm_unstable:react-interactions/umd/react-interactions-events/focus.development.js',

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
