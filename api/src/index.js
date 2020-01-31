// Imports
import express from 'express'

// App Imports
import setupServer from './setup/server'
import setupStartServer from "./setup/start-server"

import databaseConnection from "./setup/database"

// Create express server
const server = express()

// Setup server
setupServer(server)

// Start server
setupStartServer(server)