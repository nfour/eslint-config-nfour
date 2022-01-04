# eslint-config-nfour

> Some more opinionated rules to ensure good line spacing etc.
> See the [./eslintrc.js](./eslintrc.js) for details

## Install

Install it.

```bash
yarn add -D eslint-config-nfour
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
