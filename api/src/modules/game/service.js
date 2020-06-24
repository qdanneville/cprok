import GameQueries from "./query"
import QuestionQueries from "../question/query"

const GameServices = {
    getAll: (req, callback) => {
        GameQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Modules successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getById: (id, callback) => {
        GameQueries.getById(id,
            response => {
                return callback({ success: true, message: 'Module successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    create: (userId, mode, category_id = 1, nb_questions, callback) => {

        if (mode == 1) {
            QuestionQueries.getManyRandomQuestions(nb_questions, success => {
                GameQueries.create({ userId, currentQuestion: success[0].id },
                    response => {
                        return callback({ success: true, message: 'Game successfully created', data: { questions: success, session: response } });
                    },
                    error => {
                        return callback({ success: false, message: error });
                    });
            }, err => {
                return callback({ success: false, message: err });
            })
        } else if (mode == 2) {
            QuestionQueries.getQuestionsByCategory(category_id, nb_questions, success => {
                GameQueries.create({ userId, currentQuestion: success[0].id },
                    response => {
                        return callback({ success: true, message: 'Game successfully created', data: { questions: success, session: response } });
                    },
                    error => {
                        return callback({ success: false, message: error });
                    });
            }, err => {
                return callback({ success: false, message: err });
            })
        } else {
            QuestionQueries.getOneRandomQuestion(success => {
                GameQueries.create({ userId, currentQuestion: success.id },
                    response => {
                        return callback({ success: true, message: 'Game successfully created', data: { questions: success, session: response } });
                    },
                    error => {
                        return callback({ success: false, message: error });
                    });
            }, err => {
                return callback({ success: false, message: err });
            })
        }
    },
    getModulesWithSkills: async (req, callback) => {
        GameQueries.getAll(req, response => {

            const modules = response;
            let modulesWithSkills = []
            let itemsProcessed = 0;
            let userId = req.query.user;

            modules.forEach(module => {
                SkillServices.getByModuleId(module.id, result => {

                    let skills = result.data;
                    let skillsWithLevel = []
                    let moduleWithSkills = {}
                    let skillProcessed = 0;

                    skills.forEach(skill => {
                        LevelServices.getBySkillAndUser({ userId: userId, skillId: skill.id }, result => {
                            let level = result.data;

                            let skillWithLevel = { ...skill, level }
                            skillsWithLevel.push(skillWithLevel);

                            skillProcessed++;

                            if (skillProcessed === skills.length) {
                                moduleWithSkills = { ...module, skills: skillsWithLevel }
                                modulesWithSkills.push(moduleWithSkills);

                                itemsProcessed++;

                                if (itemsProcessed === modules.length) {
                                    return callback({ success: true, message: 'Modules successfully retrieved', data: modulesWithSkills });
                                }
                            }
                        })
                    })
                })
            });
        },
            error => {
                return callback({ success: false, message: error });
            });
        // return callback({ success: true, message: 'Modules successfully retrieved', data: modules });
    },
}

export default GameServices;