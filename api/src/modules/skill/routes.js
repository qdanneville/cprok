import express from "express"
const router = express.Router();

import SkillController from "./controller"

router.get('/', SkillController.getAll);
router.get('/:id', SkillController.getById);

export default router