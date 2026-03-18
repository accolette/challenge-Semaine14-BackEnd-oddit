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

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gestion des posts
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Liste tous les posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Numéro de page pour la pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Nombre de posts par page
 *       - in: query
 *         name: category
 *         schema:
 *           type: integer
 *         description: Filtrer par ID de catégorie
 *     responses:
 *       200:
 *         description: Liste des posts retournée avec succès
 *       404:
 *         description: Aucun post trouvé
 */
router.get("/", getAllPosts);
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Créer un post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - category_id
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: IDs des catégories associées au post
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Post créé avec succès
 *       401:
 *         description: Token manquant ou invalide
 */
router.post("/", authenticate, validatePostCreation, createPost);
/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Récupérer un post par son ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du post
 *     responses:
 *       200:
 *         description: Post retourné avec succès
 *       404:
 *         description: Post introuvable
 */
router.get("/:id", getOnePost);
/**
 * @swagger
 * /posts/{id}:
 *   patch:
 *     summary: Modifier un post
 *     tags: [Posts]
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
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: IDs des catégories à associer (remplace les existantes)
 *     responses:
 *       200:
 *         description: Post mis à jour avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Action non autorisée
 *       404:
 *         description: Post introuvable
 */
router.patch("/:id", authenticate, validatePostUpdate, updatePost);
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Supprimer un post
 *     tags: [Posts]
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
 *         description: Post supprimé avec succès
 *       401:
 *         description: Token manquant ou invalide
 *       403:
 *         description: Action non autorisée
 *       404:
 *         description: Post introuvable
 */
router.delete("/:id", authenticate, deletePost);

export default router;
