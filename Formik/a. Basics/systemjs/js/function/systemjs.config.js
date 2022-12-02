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
    'npm:': '../../../../../node_modules/'
  },
  map: {
    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
    deepmerge: 'npm:deepmerge/dist/cjs.js',
    formik: 'npm:formik/dist/formik.cjs.development.js',
    'hoist-non-react-statics':
      'npm:hoist-non-react-statics/dist/hoist-non-react-statics.js',
    lodash: 'npm:lodash',
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'react-fast-compare': 'npm:react-fast-compare/index.js',
    'tiny-warning': 'npm:tiny-warning/dist/tiny-warning.js'
  },
  packages: {
    '.': {
      defaultExtension: 'jsx'
    },
    lodash: {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
