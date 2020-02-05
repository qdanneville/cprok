import UserQueries from "./query"

const UserServices = {
    getAll: (req, callback) => {
        UserQueries.getAll(req,
            response => {
                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getById: (id, callback) => {
        UserQueries.getById(id,
            response => {
                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    authenticate: (body, callback) => {
        let { username, password } = body;

        UserQueries.authenticate({ username, password },
            response => {

                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    register: (body, callback) => {
        let { firstname, lastname, password, username } = body;

        UserQueries.register({ firstname, lastname, password, username },
            response => {

                return callback({ success: true, message: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    }
}

export default UserServices;