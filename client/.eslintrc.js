module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react', 'react-hooks'],
  rules: {
    'arrow-body-style': 'error',
    'prettier/prettier': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      // We need to set this because we're not using the latest version of React
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/README.md#configuration
      version: 'detect',
    },
  },
}
