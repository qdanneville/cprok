import express from "express"
const router = express.Router();

import QuestionController from "./controller"

router.get('/', QuestionController.getAll);
router.get('/category/:id', QuestionController.getQuestionsByCategory);
router.get('/random/set/', QuestionController.getManyRandomQuestions);
router.get('/random', QuestionController.getOneRandomQuestion);
router.get('/:id/answers', QuestionController.getQuestionAnswers);
router.get('/game/:id', QuestionController.getGameQuestionsDetails);
router.get('/:id', QuestionController.getById);

export default router