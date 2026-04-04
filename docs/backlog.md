# 📌 Backlog — Projet O-ddit

## 🎯 Objectif

Développer une API REST pour une plateforme de forum multidisciplinaire permettant la gestion des utilisateurs, catégories, posts et commentaires.

---

## 🗓 Planification globale

- J1 → Conception + Setup
- J2 → Authentification + Users
- J3 → Posts + Commentaires + Sécurité + Documentation

---

## 🎯 1. Fonctionnel (User Stories)

### 🔐 Utilisateurs

- ✅ US1 — Création de compte
- ✅ US2 — Authentification
- ✅ US3 — Profil utilisateur

### 📂 Catégories

- ⏳ US4 — Création de catégorie
- ✅ US5 — Liste des catégories
- ⏳ US6 — Modification / suppression

### 📝 Posts

- ✅ US7 — Création de post
- ⏳ US8 — Liste des posts (partiellement réalisée)
- ✅ US9 — Modification de post
- ⏳ US10 — Système de tags

### 💬 Commentaires

- ✅ US11 — Ajout de commentaire
- ✅ US12 — Modification / suppression
- ⏳ US13 — Réponses aux commentaires

### ⭐ Bonus

- ⏳ US14 — Gestion des rôles
- ⏳ US15 — Frontend

---

## 🛠 2. Conception & Architecture (J1)

- Rédaction des User Stories
- MCD / MLD / MPD
- Initialisation projet Node.js
- Mise en place Sequelize
- Création des modèles
- Seed de la base

---

## 🔐 3. Authentification (J2)

- Register avec hash du mot de passe
- Login avec JWT
- Route GET /auth/me

---

## ⚙️ 4. Fonctionnalités API (J3)

- Profil utilisateur (GET / PATCH)
- Liste catégories
- CRUD posts (partiel)
- CRUD commentaires (partiel)
- Gestion droits (auteur uniquement)

---

## 🛡 5. Sécurité & Documentation

- Helmet
- Rate Limiter
- Limitation body parsing
- Swagger
- Logs serveur

---

## 🚀 6. Reste à faire

- CRUD complet catégories
- Pagination posts complète
- Système de tags
- Réponses aux commentaires
- Gestion des rôles
