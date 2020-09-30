const dotenv = require('dotenv').config()

const config = {
  "port": 3001,
  "secret": process.env.JSONWEBTOKEN_SECRET || 'default json web token secret passphrase to encode/decode our token'
}

export default config