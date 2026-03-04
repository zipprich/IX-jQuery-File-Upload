'use strict';

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  {
    ignores: ['**/*.min.js', 'test/vendor/**']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script'
    }
  },
  ...compat.config({
    extends: [
      'blueimp',
      'plugin:jsdoc/recommended',
      'plugin:prettier/recommended'
    ],
    env: {
      browser: true
    },
    overrides: [
      {
        files: ['eslint.config.js'],
        env: {
          node: true
        }
      },
      {
        files: ['wdio/**/*.js', 'wdio/.eslintrc.js', 'wdio/.prettierrc.js'],
        env: {
          node: true
        },
        parserOptions: {
          ecmaVersion: 2019
        }
      }
    ]
  })
];
