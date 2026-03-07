import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import { loginUser } from "../controllers/auth.controllers.js";
import { getAllCategories } from "../controllers/categories.controllers.js";

const router = express.Router();

router.get("/", getAllCategories);

export default router;
