import QuestionQueries from "./query"

const QuestionServices = {
    getAll: (req, callback) => {
        QuestionQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Questions successfuly retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getAllSortByModule: (req, callback) => {
        QuestionQueries.getAllSortByModule(req,
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getById: (id, callback) => {
        QuestionQueries.getById(id,
            response => {
                return callback({ success: true, message: 'Skill successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getByUserId: (userId, callback) => {
        QuestionQueries.getByUserId(userId,
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getByModuleId: (callback) => {
        QuestionQueries.getByModuleId(moduleId,
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getOneRandomQuestion: (callback) => {
        QuestionQueries.getOneRandomQuestion(
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getManyRandomQuestions: (nb_questions, callback) => {
        QuestionQueries.getManyRandomQuestions(nb_questions,
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getQuestionsByCategory: (category_id, nb_questions, callback) => {
        QuestionQueries.getQuestionsByCategory(category_id, nb_questions,
            response => {
                return callback({ success: true, message: 'Questions successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default QuestionServices;