# O-ddit — Multidisciplinary Expert Forum API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express-Framework-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-lightblue)

English below 👇

---

# 🇫🇷 O-ddit — API de forum multidisciplinaire

## Présentation

**O-ddit** est une plateforme de forum permettant à des experts issus de différents domaines (sciences, technologie, arts, médecine, etc.) de partager leurs connaissances et d’échanger autour de sujets interdisciplinaires.

Ce projet consiste à développer une **API REST complète, sécurisée et documentée**, servant de fondation à la plateforme.

L’API gère :

* les utilisateurs
* les catégories
* les posts
* les commentaires

Le projet met l’accent sur :

* les **bonnes pratiques REST**
* une architecture **MVC claire**
* la validation des données
* la sécurité des échanges
* la gestion d’une base **PostgreSQL avec Sequelize**

---

## Stack technique

Backend :

* Node.js
* Express

Base de données :

* PostgreSQL
* Sequelize ORM

Validation & sécurité :

* Joi
* JSON Web Token (JWT)
* Helmet (sécurisation des headers HTTP)
* Express Rate Limit (protection contre le brute force)

---

## Fonctionnalités principales

L’API permet :

* la gestion des **utilisateurs**
* la gestion des **catégories**
* la création et gestion des **posts**
* la gestion des **commentaires et réponses**

👉 [Lien vers les User Stories](./docs/user-stories.md)

---

## Sécurité & bonnes pratiques

Plusieurs mécanismes ont été mis en place pour renforcer la sécurité de l’API :

* **CORS configuré** (restriction des origines en production)
* **Helmet** → sécurisation des headers HTTP (XSS, clickjacking, etc.)
* **Rate Limiter** → protection contre les attaques par brute force (login, endpoints sensibles)
* **Limitation du body parsing** → prévention des payloads trop volumineux
* **Middleware global de gestion des erreurs (404 + erreurs serveur)**

---

## Documentation de l’API

Une documentation interactive est disponible via **Swagger** :

👉 `http://localhost:PORT/api/docs/`

Elle permet :

* de visualiser les routes
* de tester les endpoints directement
* de comprendre les formats de requêtes/réponses

---

## Logs & suivi en production

Un système de logs a été mis en place pour :

* tracer les erreurs serveur
* faciliter le debug
* améliorer le suivi en production

Les logs sont centralisés dans un fichier dédié.

---

## Architecture du projet

Structure simplifiée :

```
api
│
├── controllers
├── models
├── routes
├── middlewares
├── logs
└── app.js
```

Architecture basée sur **MVC** :

* **Models** → accès aux données
* **Controllers** → logique métier
* **Routes** → endpoints API
* **Middlewares** → sécurité, logs et gestion des erreurs

---

## Base de données

👉 [Modèle logique de données](./docs/MLD.png)

---

## API Endpoints

| Method | Route            | Description                          | Auth          |
| ------ | ---------------- | ------------------------------------ | ------------- |
| POST   | `/auth/register` | Create a new user                    | ❌             |
| POST   | `/auth/login`    | Authenticate a user and generate JWT | ❌             |
| GET    | `/auth/me`       | Get current authenticated user       | ✅             |
| GET    | `/categories`    | List all categories                  | ❌             |
| POST   | `/categories`    | Create a category                    | ✅ (admin/mod) |
| GET    | `/posts`         | List posts (with pagination)         | ❌             |
| POST   | `/posts`         | Create a post                        | ✅             |
| PATCH  | `/posts/:id`     | Update a post                        | ✅             |
| DELETE | `/posts/:id`     | Delete a post                        | ✅             |
| POST   | `/comments`      | Add a comment                        | ✅             |
| PATCH  | `/comments/:id`  | Update a comment                     | ✅             |
| DELETE | `/comments/:id`  | Delete a comment                     | ✅             |

---

## Tester l’API avec REST Client

Les routes peuvent être testées avec **REST Client (VS Code)**.

---

## Installation

Prérequis :

* Node.js
* PostgreSQL
* npm

```bash
npm install
cp .env.example .env
npm run db:create
npm run db:seed
# Ou
npm run db:reset
npm run dev
```

---

# 🇬🇧 O-ddit — Multidisciplinary Forum API

## Overview

**O-ddit** is a **secure and documented REST API** for a multidisciplinary forum platform.

It allows experts from various fields to share knowledge and collaborate.

---

## Technical Stack

Backend

* Node.js
* Express

Database

* PostgreSQL
* Sequelize ORM

Validation & Security

* Joi
* JSON Web Token (JWT)
* Helmet
* Express Rate Limit

---

## Security & Best Practices

The API includes several security improvements:

* Configured **CORS** (restricted origins)
* **Helmet** → secure HTTP headers
* **Rate Limiting** → brute force protection
* Request size limiting
* Global error handling middleware

---

## API Documentation

Swagger documentation available at:

👉 `http://localhost:PORT/api/docs/`

---

## Logging System

A logging system is implemented to:

* track server errors
* improve debugging
* monitor production behavior

---

## Installation

```bash
npm install
cp .env.example .env
npm run db:create
npm run db:seed
npm run dev
```
