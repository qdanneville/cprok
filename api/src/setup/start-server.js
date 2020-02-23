// Start server

import config from "../config/server"

const StartServer = (server) => {
    console.info('SETUP - Starting server..')

    server.listen(config.port, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${config.port} [DEV]`)
        }
    })
}

export default StartServer

