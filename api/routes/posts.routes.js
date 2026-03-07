import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import { validatePostCreation } from "../middlewares/post.middlewares.js";
import { getAllPosts, createPost } from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", authenticate, validatePostCreation, createPost);

export default router;
