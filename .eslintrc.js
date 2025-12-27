module.exports = {
  extends: ['expo', 'prettier'],
  ignorePatterns: ['/dist/*', 'src/components/ui/**'],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Import rules
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '@/global.css',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/context/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/services/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'expo-router',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react-native',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': 'error',

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // General rules
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-warning-comments': [
      'error',
      { terms: ['todo', 'fixme', 'xxx'], location: 'anywhere' },
    ],
    'prefer-const': 'error',
    'no-var': 'error',

    // React rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
