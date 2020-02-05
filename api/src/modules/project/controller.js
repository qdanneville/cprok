import ProjectServices from "./service"

const ProjectController = {
    getAll: (req, res) => {
        //If we're catching a query like /api/projects/?user=id, we're gonna filter by calling its appropriate service

        req.query.user
            ? ProjectServices.getByUserId(req.query.user, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
            :
            ProjectServices.getAll(req, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
    },
    getById: (req, res) => {
        ProjectServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default ProjectController