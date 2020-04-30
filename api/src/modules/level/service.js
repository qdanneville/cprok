import LevelQueries from "./query"

const SkillServices = {
    getAll: (req, callback) => {
        LevelQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Levels successfuly retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getBySkillAndUser: (params, callback) => {
        LevelQueries.getBySkillAndUser(params,
            response => {
                return callback({ success: true, message: 'Level successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    updateLevel: (params, callback) => {
        LevelQueries.updateLevel(params,
            response => {
                return callback({ success: true, message: 'Level successfully updated', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default SkillServices;