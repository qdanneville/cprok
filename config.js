const dotenv = require('dotenv').config();

const config = {
    APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost', 
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
}

module.exports = config