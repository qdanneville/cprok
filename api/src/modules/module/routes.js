import express from "express"
const router = express.Router();

import ModuleController from "./controller"

router.get('/', ModuleController.getAll);
router.get('/skills/', ModuleController.getModulesWithSkills);
router.get('/:id', ModuleController.getById);

export default router