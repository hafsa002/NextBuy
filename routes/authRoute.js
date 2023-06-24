import express from "express";

import {registerController, loginController, testController} from '../controllers/authController.js'
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router();

//routing 

//register || post method

router.post('/register', registerController);

//login || POST

router.post('/login', loginController);

//test route

router.get('/test', requiredSignIn, isAdmin, testController);

export default router;