require('@rushstack/eslint-patch/modern-module-resolution');

/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
module.exports = {
  rules: {
    'camelcase': ['off'],
    'no-unused-expressions': ['off'],
    'newline-before-return': ['off'], // When enabled formatting gets jumbled up
    'no-use-before-define': ['off'], // Disabled because manual order in module scope is useful

    'unused-imports/no-unused-imports-ts': 'error',

    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { prev: '*', next: 'import', blankLine: 'always' },
      { prev: '*', next: 'import', blankLine: 'always' },
      { prev: 'import', next: '*', blankLine: 'always' },
      { prev: 'import', next: 'import', blankLine: 'never' },
      { prev: '*', next: 'multiline-block-like', blankLine: 'always' },
      { prev: 'multiline-block-like', next: '*', blankLine: 'always' },
      { prev: '*', next: 'block-like', blankLine: 'always' },
      { prev: '*', next: 'return', blankLine: 'always' },
      { prev: 'block-like', next: '*', blankLine: 'always' },
      { prev: '*', next: 'multiline-expression', blankLine: 'always' },
      { prev: 'multiline-expression', next: '*', blankLine: 'always' },
      { prev: 'if', next: '*', blankLine: 'always' },
      { prev: '*', next: 'if', blankLine: 'always' },
      { prev: 'if', next: 'if', blankLine: 'any' },
      {
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['*'],
        blankLine: 'always',
      },
      {
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
        blankLine: 'never',
      },
      {
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['multiline-const', 'multiline-let', 'multiline-var'],
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
