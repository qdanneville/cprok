import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `games`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No games.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM games WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching game");
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
    },
    addQuestion: (params, successCallback, failureCallback) => {

        const { gameId, questionId } = params

        let sqlQuery = `INSERT INTO game_has_questions (game_id, questions_id) VALUES (${gameId}, ${questionId});`

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }

            if (rows) {
                return successCallback({});
            }
        })
    },
    create: (params, successCallback, failureCallback) => {

        const { userId, currentQuestion } = params;

        let sqlQuery = `
        INSERT INTO games (id, player_id, current_question, score, played_at) 
        VALUES (NULL, ${userId}, ${currentQuestion}, '0', CURRENT_TIMESTAMP);`

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }

            if (rows.insertId) {
                Queries.getById(rows.insertId,
                    response => {
                        Queries.addQuestion({ gameId: rows.insertId, questionId: currentQuestion },
                            response => {
                                console.log(response);
                                return successCallback({});
                            },
                            fail => {
                                return failureCallback(fail)
                            })
                    },
                    error => {
                        return failureCallback(error);
                    });
            }
        })
    }
}

export default Queries


// Skills ordered by module
// SELECT modules.name, skills.name from skills, modules WHERE skills.module_id = modules.id GROUP BY modules.name, skills.name
