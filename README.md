# Smite.js [![dependency status](https://david-dm.org/shaggyo/smite.js.svg)]() [![license](https://img.shields.io/github/license/shaggyo/smite.js.svg)]()
> Node package for interacting with SMITE API

## What you need
1. Installed Node and NPM from https://nodejs.org/en/

2. Your own SMITE API id and key from https://fs12.formsite.com/HiRez/form48/secure_index.html

```bash
npm install smite.js --save
```

## Usage
```js
import { createSession } from 'smite.js'

createSession ({
  auth_id: YOUR_SMITE_API_ID,
  auth_key: YOUR_SMITE_API_KEY
})
.then(a => a.json())
.then(data => {
  console.log(data)
})
```
