module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-props-no-multi-spaces': 'error'
  }
}
