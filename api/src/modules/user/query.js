import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `user`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No users.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM user WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No matching user");
            }
        })
    },
    authenticate: (user, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM USER WHERE username="${user.username}" AND password="${user.password}"`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback("User correclty authenticated");
            } else {
                return successCallback("Incorrect username or password combinaison");
            }
        })
    },
    register: (user, successCallback, failureCallback) => {

        let sqlQuery = `INSERT INTO user (id, firstname, lastname, password, username) VALUES (NULL, "${user.firstname}", "${user.lastname}", "${user.password}", "${user.username}");`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }

            return successCallback("New user successfuly created");
        })
    }
}

export default Queries