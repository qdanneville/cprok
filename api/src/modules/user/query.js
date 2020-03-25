import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `padawans`";

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

        let sqlQuery = `SELECT * FROM padawans WHERE ID=${id}`;

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
    getByUsername: (username) => {
        let sqlQuery = `SELECT *
        from padawans, login_profile
        WHERE padawans.id = login_profile.user_id
        AND login_profile.username = "${username}"`;

        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            })
        })
    },
    register: (user) => {
        return new Promise((resolve, reject) => {
            let sqlQuery = `INSERT INTO padawans (id, firstname, lastname, email) VALUES (NULL, "${user.firstname}", "${user.lastname}","${user.email}");`;
            let getUserIdQuery = `SELECT id FROM padawans
                            WHERE email = "${user.email}"`

            db.query(sqlQuery, (err, res) => {
                if (err) reject(err)

                db.query(getUserIdQuery, (err, res) => {
                    if (err) reject(err)

                    let addLoginQuery = `INSERT INTO login_profile (id, username, password, user_id) VALUES (NULL, "${user.username}", "${user.hashedPassword}","${res[0].id}");`;

                    db.query(addLoginQuery, (err, res) => {
                        if (err) reject(err)

                        resolve(res);
                    })

                })
            })
        })
    }
}

export default Queries