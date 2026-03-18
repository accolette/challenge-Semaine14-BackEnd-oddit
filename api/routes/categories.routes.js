import express from "express";

import { authenticate } from "../middlewares/auth.middlewares.js";
import { getAllCategories } from "../controllers/categories.controllers.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gestion des catégories
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Liste toutes les catégories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Liste des catégories retournée avec succès
 *       404:
 *         description: Aucune catégorie trouvée
 */
router.get("/", getAllCategories);

export default router;
