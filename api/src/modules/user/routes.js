import express from "express"
const router = express.Router();

import UserController from "./controller"

router.get('/all', UserController.allProjects);

export default router