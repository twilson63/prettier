#!/usr/bin/env node

const fs = require('fs')
fs.writeFileSync('.prettierrc', JSON.stringify({
  semi: true, singleQuote: false
}, null, 2))

