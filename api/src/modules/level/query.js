import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `levels`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No levels.");
            }
        })
    },
    getBySkillAndUser: (params, successCallback, failureCallback) => {

        const { userId, skillId } = params;

        let sqlQuery = `
                SELECT levels.id, levels.name
                from padawan_has_skills, levels
                WHERE padawan_has_skills.id_padawan = ${userId}
                and padawan_has_skills.id_skill = ${skillId}
                and padawan_has_skills.id_level = levels.id
                `;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("No matching level");
            }
        })
    },
}

export default Queries