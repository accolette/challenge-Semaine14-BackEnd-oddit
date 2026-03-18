import express from "express";

import {
  validateUserRegistration,
  validateUserLogin,
  authenticate,
  validateUserUpdate,
  authLimiter,
} from "../middlewares/auth.middlewares.js";
import {
  registerUser,
  loginUser,
  getConnectedUser,
  updateConnectedUser,
} from "../controllers/auth.controllers.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gestion des utilisateurs et authentification
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Créer un compte utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *     responses:
 *       201:
 *         description: Compte créé avec succès
 *       409:
 *         description: Login déjà existant
 */
router.post("/register", authLimiter, validateUserRegistration, registerUser);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Se connecter
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie, retourne un token JWT
 *       401:
 *         description: Identifiants invalides
 */
router.post("/login", authLimiter, validateUserLogin, loginUser);
/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Consulter mon profil
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profil de l'utilisateur connecté
 *       401:
 *         description: Token manquant ou invalide
 *       404:
 *         description: Utilisateur introuvable
 */
router.get("/me", authenticate, getConnectedUser);
/**
 * @swagger
 * /auth/me:
 *   patch:
 *     summary: Modifier mon profil
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profil mis à jour avec succès
 *       401:
 *         description: Token manquant ou invalide
 */
router.patch("/me", authenticate, validateUserUpdate, updateConnectedUser);

export default router;
