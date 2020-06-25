import db from "../../setup/database";
import UserQueries from "../user/query"
import QuestionQueries from '../question/query'

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
    getPlayerGames: (playerId, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * from games WHERE games.player_id = ${playerId}`;

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

                QuestionQueries.getGameQuestions(rows[0].id,
                    success => {
                        return successCallback({ session: rows[0], questions: success });
                    },
                    error => {
                        return failureCallback(error);
                    })
            } else {
                return successCallback("No matching game");
            }
        })
    },
    update: (params, successCallback, failureCallback) => {

        const { id, score, steps, currentQuestion } = params

        let sqlQuery = `UPDATE games SET current_question=${currentQuestion}, score=${score}, steps=${steps} WHERE id = ${id}`


        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows) {
                console.log(rows);
                return successCallback({});
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

        const { userId, currentQuestion, mode, questions } = params;

        UserQueries.getById(userId, success => {
            if (success[0]) {
                let gamePlayed = success[0].game_played + 1;

                let sqlQuery = `
                    INSERT INTO games (id, player_id, current_question, score, played_at, steps, mode) 
                    VALUES (NULL, ${userId}, ${currentQuestion}, 0, CURRENT_TIMESTAMP, 0, ${mode});`


                db.query(sqlQuery, (err, rows) => {
                    if (err) {
                        return failureCallback(err);
                    }

                    let updtatePlayer = `UPDATE players SET game_played=${gamePlayed}, current_game= ${rows.insertId} WHERE id = ${userId}`

                    if (rows.insertId) {

                        // console.log('update player req :', updtate);
                        db.query(updtatePlayer, (err, updateRes) => {
                            if (err) {
                                return failureCallback(err);
                            }
                            if (updateRes) {
                            }
                        })

                        Queries.getById(rows.insertId,
                            response => {

                                let nbIterations = 0;
                                questions.forEach(question => {
                                    Queries.addQuestion({ gameId: rows.insertId, questionId: question.id },
                                        response => {

                                            nbIterations++

                                            if (nbIterations >= questions.length) {
                                                return successCallback({ id: rows.insertId, mode: mode });
                                            }

                                        },
                                        fail => {
                                            return failureCallback(fail)
                                        })
                                });


                            },
                            error => {
                                return failureCallback(error);
                            });

                    }
                })
            }
        })
    }
}

export default Queries


// Skills ordered by module
// SELECT modules.name, skills.name from skills, modules WHERE skills.module_id = modules.id GROUP BY modules.name, skills.name
