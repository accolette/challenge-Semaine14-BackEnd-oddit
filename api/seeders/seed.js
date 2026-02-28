import {
  AppUser,
  Category,
  Comment,
  Post,
  sequelize,
} from "../models/index.js";

// AppUers

const userOne = await AppUser.create({
  first_name: "Alice",
  last_name: "Martin",
  pseudo: "alice_dev",
  email: "alice@example.com",
  password: "$2b$10$hashedpassword1",
});

const userTwo = await AppUser.create({
  first_name: "Thomas",
  last_name: "Dubois",
  pseudo: "tom_code",
  email: "thomas@example.com",
  password: "$2b$10$hashedpassword2",
});

// Posts

const postOne = await Post.create({
  title: "Comprendre les associations Sequelize",
  content:
    "Petit retour d'expérience sur les relations One-to-Many et Many-to-Many.",
  appUser_id: 1,
});

const postTwo = await Post.create({
  title: "Structurer un projet Node proprement",
  content: "Voici comment organiser dossier config, models et controllers.",
  appUser_id: 2,
});

// Comments
const commentOne = await Comment.create({
  content: "Super explication, merci !",
  post_id: 1,
  appUser_id: 2,
});

const commentTwo = await Comment.create({
  content: "Très clair, ça m'aide beaucoup.",
  post_id: 2,
  appUser_id: 1,
});

// Categories
const categoryOne = await Category.create({
  name: "JavaScript",
});

const categoryTwo = await Category.create({
  name: "BackEnd",
});

const categoryThree = await Category.create({
  name: "frontEnd",
});

// Associations Post_category
await postOne.addCategory(categoryOne);
await postOne.addCategory(categoryTwo);
await postTwo.addCategory(categoryTwo);
await postTwo.addCategory(categoryThree);

console.log("✅ Seeding complete!");
await sequelize.close();
