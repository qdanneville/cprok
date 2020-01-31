import PageServices from "./service"

const ProjectController = {
    getAll: (req, res) => {
        PageServices.getAll(req, result => {
            //Will be executed once the service is finished
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getById: (req, res) => {
        PageServices.getById(req.params.id, result => {
            //Will be executed once the service is finished
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    }
}

export default ProjectController