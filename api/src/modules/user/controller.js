import UserServices from "./service"

const UserController = {
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
            .then(result => res.status(result.status).send(result.payload))
    },
    register: async (req, res) => {
        UserServices.register(req.body)
            .then(result => res.status(result.status).send(result.payload))
    }
}

export default UserController