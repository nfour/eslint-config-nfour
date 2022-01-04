# eslint-config-nfour

> Some opinionated style & type rules built on top of https://github.com/nfour/eslint-config-standard-typescript-prettier
> 
> See [./eslintrc.js](./eslintrc.js)

## Install

Install it.

```bash
pnpm add -D eslint-config-nfour
```

Wire it up.

```bash
echo "module.exports = require('eslint-config-nfour')" > .eslintrc.js

# OR with react rules...

echo "module.exports = require('eslint-config-nfour/.eslintrc.react')" > .eslintrc.js
```

Done 

## Prettier

To overwrite the default prettier config
then create a `.prettierrc.js` in your project:

```js
module.exports = {
  ...require('eslint-config-nfour/.prettierrc'),
  semi: false,
}
```

## How it works
Thanks to `require('@rushstack/eslint-patch/modern-module-resolution');`, plugins can be included relative to the configs, not the consuming project.
