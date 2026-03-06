# User Stories - O-ddit 🚀

## Contexte
O-ddit est une plateforme de forum spécialisée permettant aux experts de différents domaines (sciences, technologie, arts, médecine, etc.) de partager leurs connaissances et collaborer sur des projets interdisciplinaires.

---

## Objectif
Développer l'API REST backend pour gérer les utilisateurs, catégories, posts et commentaires tout en respectant les bonnes pratiques REST, la validation des données et l'architecture MVC.

---

## 1️⃣ Gestion des utilisateurs

### US1 - Création de compte
**En tant que** nouvel utilisateur  
**Je veux** créer un compte avec un login, mot de passe et informations personnelles  
**Afin de** pouvoir accéder à la plateforme et participer aux discussions.

### US2 - Authentification
**En tant que** utilisateur inscrit  
**Je veux** me connecter avec mon login et mot de passe  
**Afin de** sécuriser l'accès à mon compte et mes interactions.

### US3 - Profil utilisateur
**En tant que** utilisateur  
**Je veux** consulter et modifier mon profil  
**Afin de** mettre à jour mes informations personnelles et préférences.

---

## 2️⃣ Gestion des catégories

### US4 - Création de catégorie
**En tant que** administrateur  
**Je veux** créer une nouvelle catégorie de discussion  
**Afin de** organiser les sujets de manière claire et pertinente.

### US5 - Liste des catégories
**En tant que** utilisateur  
**Je veux** consulter toutes les catégories disponibles  
**Afin de** choisir celles qui m'intéressent.

### US6 - Modification/suppression de catégorie
**En tant que** administrateur  
**Je veux** pouvoir modifier ou supprimer une catégorie  
**Afin de** maintenir la plateforme à jour et pertinente.

---

## 3️⃣ Gestion des posts

### US7 - Création de post
**En tant que** utilisateur  
**Je veux** créer un post dans une catégorie  
**Afin de** partager mes connaissances ou poser des questions.

### US8 - Liste des posts avec pagination
**En tant que** utilisateur  
**Je veux** consulter la liste des posts d'une catégorie avec pagination  
**Afin de** naviguer facilement parmi de nombreux contenus.

### US9 - Modification/suppression de post
**En tant que** utilisateur  
**Je veux** pouvoir modifier ou supprimer mes propres posts  
**Afin de** corriger ou retirer des informations.

### US10 - Système de tags
**En tant que** utilisateur  
**Je veux** ajouter des tags à mes posts  
**Afin de** faciliter la recherche et le tri des contenus.

---

## 4️⃣ Gestion des commentaires

### US11 - Ajout de commentaire
**En tant que** utilisateur  
**Je veux** commenter un post  
**Afin de** participer à la discussion ou répondre à des questions.

### US12 - Modification/suppression de commentaire
**En tant que** utilisateur  
**Je veux** pouvoir modifier ou supprimer mes commentaires  
**Afin de** corriger ou retirer mes contributions.

### US13 - Réponse aux commentaires
**En tant que** utilisateur  
**Je veux** répondre à un commentaire  
**Afin de** créer une conversation structurée.

---
## 5️⃣ Bonus

### US14 - Création de rôle administateur / user / moderateurs
### US15 - Création du FrontEnd


---

## Contraintes techniques

- Respect des principes REST
- Validation des données avec Joi
- Gestion centralisée des erreurs
- Utilisation de Node.js, Express et Sequelize
- Base de données PostgreSQL

---

## Bonus / Avancé

- Documentation de l'API avec Swagger
- Système de modération des contenus
- API de statistiques et suivi d’activité