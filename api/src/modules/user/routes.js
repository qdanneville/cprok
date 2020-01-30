import express from "express"
const router = express.Router();

import userController from "./controller"

router.get("/", userController.authenticate)

export default router