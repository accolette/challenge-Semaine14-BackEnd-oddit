import express from "express";

import {
  validateUserRegistration,
  validateUserLogin,
} from "../middlewares/auth.middlewares.js";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", validateUserRegistration, registerUser);
router.post("/login", validateUserLogin, loginUser);
//router.get("/me", authenticate, getConnectedUser);

export default router;
