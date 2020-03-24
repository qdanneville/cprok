import express from "express"
const router = express.Router();

import ModuleController from "./controller"

router.get('/', ModuleController.getAll);

export default router