// Imports
import express from 'express'

import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from "dotenv"

import router from "./router"

const server = (server) => {
    console.info('SETUP - Loading modules...')

    // Enable CORS
    server.use(cors())

    // Request body parser
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    // Request body cookie parser
    server.use(cookieParser())

    server.use(morgan('tiny'))

    // Initializing our routes
    router(server);
}

export default server;