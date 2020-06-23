import express from "express"
const router = express.Router();

import QuestionController from "./controller"

router.get('/', QuestionController.getAll);
router.get('/random', QuestionController.getOneRandomQuestion);
router.get('/:id', QuestionController.getById);

export default router