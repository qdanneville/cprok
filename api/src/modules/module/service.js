import ModuleQueries from "./query"

const ModuleServices = {
    getAll: (req, callback) => {
        ModuleQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Modules successfuly retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
}

export default ModuleServices;