import UserServices from "./service"

const UserController = {
    getUserWithToken: (req, res) => {
        UserServices.getUserWithToken(req)
            .then(result => res.status(result.status).send(result.payload))
    },
    getAll: (req, res) => {
        UserServices.getAll(req, result => {
            //Will be executed once the service is finished
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getById: (req, res) => {
        UserServices.getById(req.params.id, result => {
            //Will be executed once the service is finished
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    authenticate: (req, res) => {
        UserServices.authenticate(req.body)
            .then(result => {
                // res.cookie('token', result.payload.data.token, { maxAge: 900000, httpOnly: true, secure: false })
                res.status(result.status).send(result.payload)
            })
    },
    register: (req, res) => {
        UserServices.register(req.body)
            .then(result => res.status(result.status).send(result.payload))
    }
}

export default UserController