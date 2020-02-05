import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `project`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No project.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM project WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching project");
            }
        })
    },
    getByUserId: (userID, successCallback, failureCallback) => {
        let sqlQuery = `SELECT * FROM project, user_has_project where project.id = user_has_project.project_id AND user_has_project.user_id = '${userID}'`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("User has no projects");
            }
        })
    }
}

export default Queries