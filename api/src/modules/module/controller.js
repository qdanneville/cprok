import ModuleServices from "./service"

const ModuleController = {
    getAll: (req, res) => {
        ModuleServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default ModuleController