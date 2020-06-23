import QuestionsServices from "./service"

const QuestionController = {
    getAll: (req, res) => {
        //If we're catching a query like /api/projects/?user=id, we're gonna filter by calling its appropriate service
        // Filtering by user id
        if (req.query.user) {
            QuestionsServices.getByUserId(req.query.user, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        // Filtering by module
        else if (req.query.module) {
            QuestionsServices.getByModuleId(req.query.module, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }
        // Sorting
        else if (req.query.sortBy) {
            if (req.query.sortBy === "module") {
                QuestionsServices.getAllSortByModule(req, result => {
                    result.success ? res.status(200).send(result) : res.status(404).send(result)
                })
            }
        }
        else {
            QuestionsServices.getAll(req, result => {
                result.success ? res.status(200).send(result) : res.status(404).send(result)
            })
        }

    },
    getById: (req, res) => {
        QuestionsServices.getById(req.params.id, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
    getOneRandomQuestion: (req, res) => {
        QuestionsServices.getOneRandomQuestion(result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    },
}

export default QuestionController