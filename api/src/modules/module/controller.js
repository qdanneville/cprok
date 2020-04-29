import ModuleServices from "./service"

const ModuleController = {
    getAll: (req, res) => {
        ModuleServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getById: (req, res) => {
        ModuleServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getModulesWithSkills: (req, res) => {
        ModuleServices.getModulesWithSkills(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    }
}

export default ModuleController