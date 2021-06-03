module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': [0],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-undef': 'off',
    'no-unised-vars': [0],
    camelcase: 'off',
    'no-useless-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'space-before-function-paren': 'off',
    'multiline/ternary': 'off',
    'no-unused-vars': 'off'
  }
}
