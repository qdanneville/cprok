import ProjectServices from "./service"

const ProjectController = {
    allProjects: (req, res) => {
        ProjectServices.allProjects(req, result => {
            //Will be executed once the service is finished
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    }
}

export default ProjectController