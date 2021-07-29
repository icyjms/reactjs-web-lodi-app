const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

const isProd = process.env.NODE_ENV === 'production';
const warnDevErrorProd = isProd ? 'error' : 'warn';

module.exports = {
  extends: [
    'react-app',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'prettier',
    'react',
    'jsx-a11y',
    'import',
    'sort-imports-es6-autofix',
    'test-selectors'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single',{avoidEscape:true}],
    semi: ['error', 'always'],
    'prettier/prettier': ['error', prettierOptions],
    'import/export': 1,
    'import/exports-last': 2,
    'import/newline-after-import': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-console': warnDevErrorProd,
    'no-debugger': warnDevErrorProd,
    'no-dupe-keys': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      1,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
