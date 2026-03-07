import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import {
  validateCommentCreation,
  validateCommentUpdate,
} from "../middlewares/comments.middlewares.js";
import {
  createComment,
  getOneComment,
  updateComment,
  deleteComment,
} from "../controllers/comments.controllers.js";

const router = express.Router();

router.post("/", authenticate, validateCommentCreation, createComment);
router.get("/:id", getOneComment);
router.patch("/:id", authenticate, validateCommentUpdate, updateComment);
router.delete("/:id", authenticate, deleteComment);

export default router;
