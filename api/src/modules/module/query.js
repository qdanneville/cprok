import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `modules`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No module.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM modules WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching module");
            }
        })
    },
    getModuleWithSkills: (param, successCallback, failureCallback) => {
        let sqlQuery = `SELECT modules.id as module_id, modules.name as module_name, skills.name as skill_name
        from skills, modules 
        WHERE skills.module_id = modules.id 
        GROUP BY modules.id, modules.name, skills.name 
        ORDER BY modules.id`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("Can't retrieve skills sorted by module");
            }
        })
    }
}

export default Queries


// Skills ordered by module
// SELECT modules.name, skills.name from skills, modules WHERE skills.module_id = modules.id GROUP BY modules.name, skills.name
