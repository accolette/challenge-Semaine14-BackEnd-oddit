import express from "express";

import { validateUserRegistration } from "../middlewares/auth.middlewares.js";
import { registrate } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", validateUserRegistration, registrate);

export default router;
