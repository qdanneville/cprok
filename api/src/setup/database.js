import mysql from "mysql"
import databaseConfig from "../config/database"

var connection = mysql.createConnection({
    host: databaseConfig.host,
    user: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.database
});

//Connecting to database
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

db.create = (params, successCallback, failureCallback) => {
    console.log(params);
}