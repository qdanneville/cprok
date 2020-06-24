import ModQueries from "./query"

const ModServices = {
    getAll: (req, callback) => {
        ModQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Categories successfuly retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default ModServices;