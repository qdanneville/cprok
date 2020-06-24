import UserQueries from "./query"

import brcrypt from "bcrypt"

import jwt from "jsonwebtoken"
import config from "../../config/server"

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

        const user = await UserQueries.getByUsername(username);

        if (!user) {
            return { status: 401, payload: { success: false, message: 'Username not found' } }
        }

        const passwordMatched = await brcrypt.compare(password, user.password);

        if (passwordMatched) {
            const token = jwt.sign({ id: user.id, role: user.role }, config.secret);

            const { password, ...userWithoutPassword } = user;

            return ({ status: 200, payload: { success: true, message: 'User correctly authenticated', data: { 'token': token, user: userWithoutPassword } } })
        }

        return { status: 401, payload: { success: false, message: 'Username & password missmatch' } }
    },
    register: async (body) => {

        let { name, password, username, } = body;

        if (typeof name !== "string" || typeof password !== "string" || typeof username !== "string") {
            return { status: 400, payload: { success: false, message: "All fields are required and must be a string type" } }
        }

        return brcrypt.genSalt()
            .then(salt => brcrypt.hash(password, salt))
            .then(hashedPassword => UserQueries.register({ name, username, hashedPassword }))
            .then(user => ({ status: 201, payload: { success: true, message: 'User successfully registered' } }))
            .catch(err => ({ status: 400, payload: { success: false, message: err } }))
    },
    getUserWithToken: async (req) => {
        const user = await UserQueries.getUserInformationsByUserId(req.user.id);

        if (!user) {
            return { status: 401, payload: { success: false, message: 'User not found' } }
        }

        const { password, ...userWithoutPassword } = user;

        return ({ status: 200, payload: { success: true, message: 'User correctly authenticated', data: { user: userWithoutPassword } } })
    }
}

export default UserServices;