import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import {
  validatePostCreation,
  validatePostUpdate,
} from "../middlewares/post.middlewares.js";
import {
  getAllPosts,
  createPost,
  getOnePost,
  updatePost,
} from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", authenticate, validatePostCreation, createPost);
router.get("/:id", getOnePost);
router.patch("/:id", authenticate, validatePostUpdate, updatePost);

export default router;
