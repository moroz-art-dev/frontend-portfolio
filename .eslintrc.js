module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import', '@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js modules like fs, path
          'external', // Packages from npm like react, lodash
          'internal', // Aliased paths like @/components, @/utils
          ['parent', 'sibling', 'index'], // Relative imports like ../, ./ or index.js
          'object',
          'type', // Type imports like import type { MyType } from './my-type'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'next{,-/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next/navigation',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next-intl{,-/**}',
            group: 'external',
            position: 'after',
          },

          {
            pattern: 'next-intl/server',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@chakra-ui/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: './**/*.module.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'type'],
      },
    ],
    'import/no-unresolved': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
