import CategoryServices from "./service"

const CategoryController = {
    getAll: (req, res) => {
        //If we're catching a query like /skills/?user=id?skill=id, we're gonna filter by calling its appropriate service
        // Filtering by user id and skill id
        if (req.query.user && req.query.skill) {

            let params = { userId: req.query.user, skillId: req.query.skill }

            CategoryServices.getBySkillAndUser(params, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        else {
            CategoryServices.getAll(req, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
    }
}

export default CategoryController