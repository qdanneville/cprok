import express from "express"
const router = express.Router();

import UserController from "./controller"

//Private routes, only accessible by admin rights
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

//Public routes
router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.register);

export default router