import express from "express"

import ModController from "./controller"
import authorize from "../../helpers/authorize"

const router = express.Router();

router.get('/', ModController.getAll);

export default router