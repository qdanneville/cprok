import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `questions`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No questions.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM questions WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching questions");
            }
        })
    },
    getOneRandomQuestion: (successCallback, failureCallback) => {
        let sqlQuery = `SELECT * FROM questions
        ORDER BY RAND()
        LIMIT 1;`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No questions available");
            }
        })
    },
    getManyRandomQuestions: (nb_questions = 5, successCallback, failureCallback) => {
        let sqlQuery = `SELECT id FROM questions
        ORDER BY RAND()
        LIMIT ${nb_questions};`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No questions available");
            }
        })
    },
    getQuestionsByCategory: (category_id, nb_questions = 5, successCallback, failureCallback) => {
        let sqlQuery = `SELECT questions.id 
                        from questions, questions_has_catagories 
                        WHERE questions_has_catagories.category_id = ${category_id}
                        and questions_has_catagories.question_id = questions.id
                        ORDER BY RAND()
                        LIMIT ${nb_questions}`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No questions available");
            }
        })
    },
    getQuestionAnswers: (question_id, successCallback, failureCallback) => {
        let sqlQuery = `select *
                        from answers
                        WHERE answers.question_id = ${question_id}`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No answers available");
            }
        })
    }
}

export default Queries

// `SELECT * from questions, questions_has_catagories WHERE questions_has_catagories.category_id = 2 and questions_has_catagories.question_id = questions.id`
// select *
// from answers
// WHERE answers.question_id = 2