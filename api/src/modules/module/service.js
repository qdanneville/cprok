import ModuleQueries from "./query"
import SkillServices from "../skill/service"

const ModuleServices = {
    getAll: (req, callback) => {
        ModuleQueries.getAll(req,
            response => {
                return callback({ success: true, message: 'Modules successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getById: (id, callback) => {
        ModuleQueries.getById(id,
            response => {
                return callback({ success: true, message: 'Module successfully retrieved', data: response });
            },
            error => {
                return callback({ success: false, message: error });
            });
    },
    getModulesWithSkills: async (req, callback) => {
        ModuleQueries.getAll(req, response => {

            const modules = response;
            let modulesWithSkills = []
            let itemsProcessed = 0;

            modules.forEach(module => {
                SkillServices.getByModuleId(module.id, result => {
                    let moduleWithSkills = { ...module, skills: result.data }

                    modulesWithSkills.push(moduleWithSkills);
                    itemsProcessed++;

                    if (itemsProcessed === modules.length) {
                        return callback({ success: true, message: 'Modules successfully retrieved', data: modulesWithSkills });
                    }
                })
            });
        },
            error => {
                return callback({ success: false, message: error });
            });
        // return callback({ success: true, message: 'Modules successfully retrieved', data: modules });
    },
}

export default ModuleServices;