
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

Ce projet de formation consiste à développer l’**API REST** qui sert de fondation à la plateforme.

L’API gère :

* les utilisateurs
* les catégories
* les posts
* les commentaires

Le projet met l’accent sur :

* les **bonnes pratiques REST**
* la structuration **MVC**
* la validation des données
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

---

## Fonctionnalités principales

L’API permet :

* la gestion des **utilisateurs**
* la gestion des **catégories**
* la création et gestion des **posts**
* la gestion des **commentaires et réponses**

Le détail des fonctionnalités est défini dans les **User Stories du projet** :

👉 [Lien vers les User Stories](./docs/user-stories.md)

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
└── app.js

```

Architecture basée sur **MVC** :

* **Models** → accès aux données
* **Controllers** → logique métier
* **Routes** → endpoints API
* **Middlewares** → sécurité et gestion des erreurs

---

## Base de données

Le schéma de la base de données est disponible ici :

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

✅ = authentication required

---

## Exemples de routes API

Authentification

```

POST /auth/register
POST /auth/login

```

Posts

```

GET /posts
POST /posts

```

Commentaires

```

POST /comments

```

---

## Tester l’API avec REST Client

Les routes peuvent être testées facilement avec l’extension **REST Client (VS Code)**.

Exemple de fichier `.http` :

```

@baseUrl = [http://localhost:{{$dotenv](http://localhost:{{$dotenv) PORT}}

### Registration for a new User

POST {{baseUrl}}/auth/register
Content-Type: application/json

{
"first_name": "Jane",
"last_name": "Doe",
"pseudo": "Jj",
"email": "jjdoe@gmail.com",
"password":"@Jjdoe123"
}

### Login for a User

POST {{baseUrl}}/auth/login
Content-Type: application/json

{
"email": "jjdoe@gmail.com",
"password":"@Jjdoe123"
}

### Get info about current user

GET {{baseUrl}}/auth/me
Content-Type: application/json
Authorization: Bearer {{$dotenv TOKEN}}

```

Cette méthode permet de **tester rapidement les endpoints sans Postman**.

---

## Installation

Prérequis :

* Node.js
* PostgreSQL
* npm

Installation :

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

**O-ddit** is a forum platform designed for experts from different fields (science, technology, arts, medicine, etc.) to share knowledge and collaborate on interdisciplinary topics.

This project focuses on building the **REST API** that powers the platform.

The API manages:

* users
* categories
* posts
* comments

The project focuses on:

* **REST API best practices**
* **MVC architecture**
* server-side validation
* PostgreSQL database management with Sequelize

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

---

## Main Features

The API allows:

* **user management**
* **category management**
* **post creation and management**
* **comment and reply system**

Detailed features are defined in the project's **User Stories**:

👉 [Link to User Stories](./docs/user-stories.md)

---

## Project Architecture

Simplified structure :

```
api
│
├── controllers
├── models
├── routes
├── middlewares
└── app.js
```

Architecture based on the **MVC pattern** :

* **Models** → database interaction
* **Controllers** → business logic
* **Routes** → API endpoints
* **Middlewares** → security and error handling

---

## Database

The database schema is available here :

👉 [Logical Data Model](./docs/MLD.png)


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

✅ = authentication required

---

## API Routes Examples

Authentication

```
POST /auth/register
POST /auth/login
```

Posts

```
GET /posts
POST /posts
```

Comments

```
POST /comments
```

---

## Testing the API with REST Client

API routes can easily be tested using the **REST Client VS Code extension**.

Example `.http` file:

```
@baseUrl = [http://localhost:{{$dotenv](http://localhost:{{$dotenv) PORT}}

### Registration for a new User

POST {{baseUrl}}/auth/register
Content-Type: application/json

{
"first_name": "Jane",
"last_name": "Doe",
"pseudo": "Jj",
"email": "jjdoe@gmail.com",
"password":"@Jjdoe123"
}

### Login for a User

POST {{baseUrl}}/auth/login
Content-Type: application/json

{
"email": "jjdoe@gmail.com",
"password":"@Jjdoe123"
}

### Get info about current user

GET {{baseUrl}}/auth/me
Content-Type: application/json
Authorization: Bearer {{$dotenv TOKEN}}
```

This allows quick testing of endpoints **directly from VS Code**.

---

## Installation

Requirements

* Node.js
* PostgreSQL
* npm

Setup :

```bash
npm install
cp .env.example .env
npm run db:create
npm run db:seed
# Or
npm run db:reset
npm run dev
```



