import ModServices from "./service"

const ModController = {
    getAll: (req, res) => {
        ModServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    }
}

export default ModController