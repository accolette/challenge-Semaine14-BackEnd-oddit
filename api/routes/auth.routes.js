import express from "express";

import {
  validateUserRegistration,
  validateUserLogin,
  authenticate,
  validateUserUpdate,
} from "../middlewares/auth.middlewares.js";
import {
  registerUser,
  loginUser,
  getConnectedUser,
  updateConnectedUser,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", validateUserRegistration, registerUser);
router.post("/login", validateUserLogin, loginUser);
router.get("/me", authenticate, getConnectedUser);
router.patch("/me", authenticate, validateUserUpdate, updateConnectedUser);

export default router;
