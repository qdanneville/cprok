import mysql, { Connection } from "mysql2"
import databaseConfig from "../config/database"

const connection = mysql.createConnection({
    host: databaseConfig.development.host,
    user: databaseConfig.development.username,
    password: databaseConfig.development.password,
    database: databaseConfig.development.database,
    socketPath: databaseConfig.development.socketPath
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