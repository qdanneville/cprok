import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `players`";

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

        let sqlQuery = `SELECT * FROM players WHERE ID=${id}`;

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
    getUserInformationsByUserId: (id) => {
        let sqlQuery = `SELECT *
        from players, profiles
        WHERE players.id = profiles.player_id
        AND profiles.id = "${id}"`;

        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            })
        })
    },
    getByUsername: (username) => {
        let sqlQuery = `SELECT *
        from players, profiles
        WHERE players.id = profiles.player_id
        AND profiles.username = "${username}"`;

        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            })
        })
    },
    register: (user) => {
        return new Promise((resolve, reject) => {
            let sqlQuery = `INSERT INTO players (id, name, game_played) VALUES (NULL, '${user.name}', '0');`
            let getUserIdQuery = `SELECT id FROM players
                            WHERE name = "${user.name}"`

            db.query(sqlQuery, (err1, res) => {
                if (err1) reject(err1)

                db.query(getUserIdQuery, (err2, userRes) => {
                    if (err2) reject(err2)


                    let addLoginQuery = `INSERT INTO profiles (id, username, password, player_id, role) VALUES (NULL, "${user.username}", "${user.hashedPassword}","${userRes[0].id}", "${user.role ? user.role : 'user'}");`;

                    db.query(addLoginQuery, (err3, res) => {
                        if (err3) reject(err3)

                        console.log(res);

                        resolve(res);
                    })
                })
            })
        })
    }
}

export default Queries