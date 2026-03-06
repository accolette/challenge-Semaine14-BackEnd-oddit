import express from "express";

import { validateUserRegistration } from "../middlewares/auth.middlewares.js";
import { registerUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", validateUserRegistration, registerUser);

export default router;
