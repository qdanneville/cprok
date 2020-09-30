const dotenv = require('dotenv').config();

console.log(process.env);

const config = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "quizz",
    "host": "localhost",
    "dialect": "mysql",
    "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "socketPath": process.env.DATABASE_SOCKETPATH,
    "dialect": "mysql"
  }
}

module.exports = config

