# eslint-config-nfour

> Install it.

```bash
yarn add -D eslint-config-nfour
```

> Wire it up.

```bash
echo "module.exports = require('eslint-config-nfour')" > .eslintrc.js

# OR with react rules...

echo "module.exports = require('eslint-config-nfour/.eslintrc.react')" > .eslintrc.js
```

> Done 

Thanks to `require('@rushstack/eslint-patch/modern-module-resolution');`, plugins can be included relative to the configs, not the consuming project.