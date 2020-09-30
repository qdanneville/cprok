import mysql, { Connection } from "mysql2"
import databaseConfig from "../config/database"

console.log(process.env.PRODUCTION);
console.log(databaseConfig);


const connection = mysql.createConnection({
    host: process.env.PRODUCTION ? databaseConfig.production.host : databaseConfig.development.host,
    user: process.env.PRODUCTION ? databaseConfig.production.username : databaseConfig.development.username,
    password: process.env.PRODUCTION ? databaseConfig.production.password : databaseConfig.development.password,
    database: process.env.PRODUCTION ? databaseConfig.production.database : databaseConfig.development.database,
    socketPath: process.env.PRODUCTION ? databaseConfig.production.socketPath : databaseConfig.development.socketPath
});


//Connecting to database
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

export default connection