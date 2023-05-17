module.exports = {
  extends: [
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
