import express from "express"
const router = express.Router();

import ProjectController from "./controller"

router.get('/', ProjectController.getAll);
router.get('/:id', ProjectController.getById);

export default router