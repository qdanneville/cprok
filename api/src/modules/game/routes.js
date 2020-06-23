import express from "express"
const router = express.Router();

import GameController from "./controller"

router.get('/', GameController.getAll);
router.get('/skills/', GameController.getModulesWithSkills);
router.get('/:id', GameController.getById);
router.post('/create', GameController.create);

export default router