import express from "express"

import LevelController from "./controller"
import authorize from "../../helpers/authorize"

const router = express.Router();

router.get('/', LevelController.getAll);

export default router