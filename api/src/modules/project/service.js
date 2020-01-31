import ProjectQueries from "./query"

const ProjectServices = {
    allProjects: (req, callback) => {
        ProjectQueries.getAllProjects(req, response => {
            return callback({ success: true, message: response });
        }, error => {
            return callback({ success: false, message: error });
        });
    }
}

export default ProjectServices;