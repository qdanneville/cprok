import ProjectQueries from "./query"

const ProjectServices = {
    getAll: (req, callback) => {
        ProjectQueries.getAll(req,
            response => {
                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getById: (id, callback) => {
        ProjectQueries.getById(id,
            response => {
                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getByUserId: (userId, callback) => {
        ProjectQueries.getByUserId(userId,
            response => {
                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default ProjectServices;