import GameServices from "./service"

const ModuleController = {
    getAll: (req, res) => {
        GameServices.getAll(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getById: (req, res) => {
        GameServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getModulesWithSkills: (req, res) => {
        GameServices.getModulesWithSkills(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    update: (req, res) => {
        GameServices.update({ id: req.query.id, steps: req.query.steps, currentQuestion: req.query.current_question, score: req.query.score }, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    create: (req, res) => {
        GameServices.create(req.query.user, req.query.mode, req.query.category_id, req.query.nb_questions, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getPlayerGames: (req, res) => {
        GameServices.getPlayerGames(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default ModuleController