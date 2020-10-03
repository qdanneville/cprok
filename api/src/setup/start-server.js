// Start server

import config from "../config/server"
import fs from "fs";
import http from "http";
import https from "https";

console.log(process.env.PRIVATE_KEY);
console.log(process.env.CERTIFICATE);

const StartServer = (server) => {
    console.info('SETUP - Starting server..')

    let privateKey = "";
    let certificate = "";
    let credentials = "";
    let httpServer = null;
    let httpsServer = null;

    httpServer = http.createServer(server);

    httpServer.listen(config.port, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${config.port} [DEV]`)
        }
    })

    // PRODUCTION BUILDS a HTTPS api

    if (process.env.PRODUCTION) {
        privateKey = fs.readFileSync('privatekey.pem').toString();
        certificate = fs.readFileSync('certificate.pem').toString();
        console.log('PRIVATE KEY : ', privateKey);
        console.log('CERTIFICATE : ', privateKey);
        credentials = { key: privateKey, cert: certificate };
        console.log('CREDENTIALS : ', credentials);
        httpsServer = https.createServer(credentials, server);

        httpsServer.listen(config.port, (error) => {
            if (error) {
                console.error('ERROR - Unable to start server.')
            } else {
                console.info(`INFO - Server started on http://localhost:${config.port} [DEV]`)
            }
        })

    }
}

export default StartServer

