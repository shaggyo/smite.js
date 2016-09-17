> Node package for interacting with SMITE API

## What you need
1. Installed Node and NPM from https://nodejs.org/

2. Your own SMITE API id and key from https://fs12.formsite.com/HiRez/form48/secure_index.html

## Install
```bash
npm install smite.js --save
```

## Usage
###### More features are coming soon
```js
// If you use transpiler like babel
import { createSession } from 'smite.js'

// Or if you don't use any transpiler
const createSession = require('smite.js').createSession

createSession ({
  auth_id: YOUR_SMITE_API_ID,
  auth_key: YOUR_SMITE_API_KEY
})
.then(a => a.json())
.then(data => {
  console.log(data)
})
```
**This will print JSON response with your session_id for 15 minutes**
```json
{
  "ret_msg": "Approved",
  "session_id": "BBF5A8D5927E47C39EC49FC2668EF7F3",
  "timestamp": "9/10/2016 10:31:01 AM"
}
```
