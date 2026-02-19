// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      '** /build/ **',
      '**/storybook-static/**',
      '**/coverage/**',
      '**/dist/**',
      '**/lib/**',
      '**/node_modules/**',
      '**/setup/**',
      '**/temp/**',
      '**/__mocks__/**',
      '**/function-do-expression/**',
      '**/cljs/**',
      '**/05 - Render Conditionally/y. [do-expression] if-else/**'
    ] // Define any patterns to ignore
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        browser: true,
        node: true,
        jest: true
      }
    },
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
      //'react-compiler': reactCompiler,
      'react-hooks': reactHooks
    },
    rules: {
      'jsx-a11y/no-autofocus': 'off',
      'react/jsx-no-undef': ['error', { allowGlobals: true }],
      'react/no-did-mount-set-state': 'error',
      'react/no-deprecated': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      //'react-compiler/react-compiler': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-debugger': 'warn',
      semi: ['error', 'always']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  ...storybook.configs['flat/recommended']
];
