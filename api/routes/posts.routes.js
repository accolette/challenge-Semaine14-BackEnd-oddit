import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import {
  validatePostCreation,
  validatePostUpdate,
} from "../middlewares/posts.middlewares.js";
import {
  getAllPosts,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
} from "../controllers/posts.controllers.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", authenticate, validatePostCreation, createPost);
router.get("/:id", getOnePost);
router.patch("/:id", authenticate, validatePostUpdate, updatePost);
router.delete("/:id", authenticate, deletePost);

export default router;
