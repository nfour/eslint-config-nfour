require('@rushstack/eslint-patch/modern-module-resolution');

/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
module.exports = {
  rules: {
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'camelcase': ['off'],
    '@typescript-eslint/camelcase': ['off'], // Nah
    'no-unused-expressions': ['off'],
    'newline-before-return': ['error'],
    'no-use-before-define': ['off'],
    'newline-after-var': ['error'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { prev: '*', next: 'import', blankLine: 'always' },
      { prev: '*', next: 'import', blankLine: 'always' },
      { prev: 'import', next: 'import', blankLine: 'never' },
      { prev: '*', next: 'export', blankLine: 'always' },
      { prev: 'export', next: '*', blankLine: 'always' },
      { prev: 'export', next: 'export', blankLine: 'any' },
      { prev: '*', next: 'multiline-block-like', blankLine: 'always' },
      { prev: 'multiline-block-like', next: '*', blankLine: 'always' },
      { prev: '*', next: 'block-like', blankLine: 'always' },
      { prev: 'block-like', next: '*', blankLine: 'always' },
      { prev: '*', next: 'multiline-expression', blankLine: 'always' },
      { prev: 'multiline-expression', next: '*', blankLine: 'always' },
      { prev: 'if', next: '*', blankLine: 'always' },
      { prev: '*', next: 'if', blankLine: 'always' },
      { prev: 'if', next: 'if', blankLine: 'any' },
      { prev: '*', next: 'return', blankLine: 'always' },
      {
        prev: ['singleline-const'],
        next: ['singleline-const'],
        blankLine: 'never',
      },
    ],
  },
  plugins: ['eslint-plugin-unused-imports', 'eslint-plugin-only-warn'],
  extends: ['eslint-config-standard-typescript-prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
};
