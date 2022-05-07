// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierRule = require('./.prettierrc.json');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { parser: 'typescript', ...prettierRule }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-use-before-define': 'off'
  }
};
