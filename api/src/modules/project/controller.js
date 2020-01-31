import ProjectServices from "./service"

const ProjectController = {
    allProjects : (req, res) => {
        ProjectServices.allProjects(req, result => {
            console.log(result);
        })
    }
}

export default ProjectController