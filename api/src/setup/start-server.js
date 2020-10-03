// Start server

import config from "../config/server"
import fs from "fs";
import http from "http";
import https from "https";

const StartServer = (server) => {
    console.info('SETUP - Starting server..')

    let httpServer = null;
    let httpsServer = null;

    httpServer = http.createServer(server);

    httpServer.listen(config.http_port, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${config.port} [DEV]`)
        }
    })

    // PRODUCTION BUILDS a HTTPS api

    if (process.env.PRODUCTION) {
        const privateKey = fs.readFileSync(`${process.env.PRIVATE_KEY}`).toString();
        const certificate = fs.readFileSync(`${process.env.CERTIFICATE}`).toString();
        const credentials = { key: privateKey, cert: certificate };
        
        httpsServer = https.createServer(credentials, server);

        httpsServer.listen(config.https_port, (error) => {
            if (error) {
                console.error('ERROR - Unable to start server.')
            } else {
                console.info(`INFO - Server started on http://localhost:${config.port} [DEV]`)
            }
        })

    }
}

export default StartServer

