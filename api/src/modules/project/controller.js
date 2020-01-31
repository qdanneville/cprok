import ProjectServices from "./service"

const ProjectController = {
    allProjects : (req, res) => {
        ProjectServices.allProjects(req, result => {
            //Will be executed once the service is finished
            res.send(200, result);
        })
    }
}

export default ProjectController