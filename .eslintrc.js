module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@next/next/recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'object-curly-spacing': 'off',
    'comma-dangle': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
