import GameServices from "./service"

const ModuleController = {
    getAll: (req, res) => {
        GameServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getById: (req, res) => {
        GameServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getModulesWithSkills: (req, res) => {
        GameServices.getModulesWithSkills(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    create: (req, res) => {
        GameServices.create(req.query.user, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default ModuleController