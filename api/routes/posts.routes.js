import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import { loginUser } from "../controllers/auth.controllers.js";
import { getAllPosts } from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", getAllPosts);

export default router;
