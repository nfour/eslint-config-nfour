// eslint-disable-next-line
const base = require('./.eslintrc');

/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'react-hooks/exhaustive-deps': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  plugins: [
    ...base.plugins,
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
  ],
  extends: [
    ...base.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ...base.parserOptions,
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
};
