module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['eslint:recommended', '@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };