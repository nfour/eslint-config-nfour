require('@rushstack/eslint-patch/modern-module-resolution');

/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
module.exports = {
  rules: {
    'react-hooks/exhaustive-deps': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  extends: [
    './.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
};
