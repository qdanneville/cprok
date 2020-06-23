import express from "express"

import CategoryController from "./controller"
import authorize from "../../helpers/authorize"

const router = express.Router();

router.get('/', CategoryController.getAll);

export default router