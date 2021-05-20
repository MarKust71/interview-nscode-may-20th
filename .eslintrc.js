module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'quote-props': 0,
    indent: ['error', 2],
    'require-jsdoc': 0,
    'object-curly-spacing': 0,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'max-len': ['error', 120],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.types', '.styles'] },
    ],
    'import/extensions': [
      'error',
      'never',
      { svg: 'always', tsx: 'never', types: 'never' },
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['parent', 'internal'],
          ['index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': 2,
    'import/prefer-default-export': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/no-unused-modules': 0,
    'import/no-deprecated': 0,
    '@typescript-eslint/indent': 0,
    'import/no-anonymous-default-export': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': [
      'error',
      { additionalHooks: '(useMemoOne)' },
    ],
    camelcase: 2,
    'prefer-destructuring': 2,
    'no-nested-ternary': 2,
  },
};
