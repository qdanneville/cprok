const dotenv = require('dotenv').config()

process.env.PRIVATE_KEY

const config = {
  "http_port": process.env.HTTP_PORT || 3000,
  "https_port": process.env.HTTPS_PORT || 8443,
  "secret": process.env.JSONWEBTOKEN_SECRET || 'default json web token secret passphrase to encode/decode our token'
}

export default config