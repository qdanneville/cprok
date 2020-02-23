import UserQueries from "./query"

import brcrypt, { hash } from "bcrypt"

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
    authenticate: async (body) => {
        let { username, password } = body;

        if (typeof username !== "string" || typeof password !== "string") {
            return { status: 400, payload: { success: false, message: "All fields are required and must be a string type" } }
        }

        return UserQueries.getByUsername(username)
            .then(user => brcrypt.compare(password, user.password))
            .then(matchingPassword => matchingPassword
                ? ({ status: 200, payload: { success: true, message: 'User correctly authenticated', data: { 'token': 'soon' } } })
                : ({ status: 403, payload: { success: false, message: 'Username & password missmatch' } }))
            .catch(err => ({ status: 400, payload: { success: false, message: err } }))
    },
    register: async (body) => {

        let { firstname, lastname, password, username } = body;

        // Type validator
        if (typeof firstname !== "string" || typeof lastname !== "string" || typeof password !== "string" || typeof username !== "string") {
            return { status: 400, payload: { success: false, message: "All fields are required and must be a string type" } }
        }

        // Chained actions
        return brcrypt.genSalt()
            .then(salt => brcrypt.hash(password, salt))
            .then(hashedPassword => UserQueries.register({ firstname, lastname, hashedPassword, username }))
            .then(user => ({ status: 201, payload: { success: true, message: 'User successfully registered' } }))
            .catch(err => ({ status: 400, payload: { success: false, message: err } }))
    }
}

export default UserServices;