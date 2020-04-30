import ModuleQueries from "./query"
import SkillServices from "../skill/service"
import LevelServices from "../level/service"

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
            let userId = req.query.user;

            modules.forEach(module => {
                SkillServices.getByModuleId(module.id, result => {

                    let skills = result.data;
                    let skillsWithLevel = []
                    let moduleWithSkills = {}
                    let skillProcessed = 0;

                    skills.forEach(skill => {
                        LevelServices.getBySkillAndUser({ userId: userId, skillId: skill.id }, result => {
                            let level = result.data;

                            let skillWithLevel = { ...skill, level }
                            skillsWithLevel.push(skillWithLevel);

                            skillProcessed++;

                            if (skillProcessed === skills.length) {
                                moduleWithSkills = { ...module, skills: skillsWithLevel }
                                modulesWithSkills.push(moduleWithSkills);

                                itemsProcessed++;

                                if (itemsProcessed === modules.length) {
                                    return callback({ success: true, message: 'Modules successfully retrieved', data: modulesWithSkills });
                                }
                            }
                        })
                    })
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