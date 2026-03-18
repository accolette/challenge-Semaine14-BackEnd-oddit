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

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Gestion des commentaires
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Créer un commentaire
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - post_id
 *             properties:
 *               content:
 *                 type: string
 *               post_id:
 *                 type: integer
 *               parent_comment_id:
 *                 type: integer
 *                 description: ID du commentaire parent (pour une réponse)
 *     responses:
 *       201:
 *         description: Commentaire créé avec succès
 *       401:
 *         description: Token manquant ou invalide
 */
router.post("/", authenticate, validateCommentCreation, createComment);
/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Récupérer un commentaire par son ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commentaire retourné avec succès
 *       404:
 *         description: Commentaire introuvable
 */
router.get("/:id", getOneComment);
/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Modifier un commentaire
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Commentaire mis à jour avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Action non autorisée
 *       404:
 *         description: Commentaire introuvable
 */
router.patch("/:id", authenticate, validateCommentUpdate, updateComment);
/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Supprimer un commentaire
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commentaire supprimé avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Action non autorisée
 *       404:
 *         description: Commentaire introuvable
 */
router.delete("/:id", authenticate, deleteComment);

export default router;
