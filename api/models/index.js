import { AppUser } from "./AppUser.js";
import { Category } from "./Category.js";
import { Comment } from "./Comment.js";
import { Post } from "./Post.js";
import { sequelize } from "../config/sequelize-client.js";

// One to Many
Post.belongsTo(AppUser, {
  as: "appUser",
  foreignKey: "appUser_id",
});

Comment.belongsTo(AppUser, {
  as: "appUser",
  foreignKey: "appUser_id",
});

Comment.belongsTo(Post, {
  as: "post",
  foreignKey: "post_id",
});

// Many To Many
Post.belongsToMany(Category, {
  through: "post_category",
  as: "categories",
  foreignKey: "post_id",
  otherKey: "category_id",
});

Category.belongsToMany(Post, {
  through: "post_category",
  as: "posts",
  foreignKey: "category_id",
  otherKey: "post_id",
});

export { AppUser, Category, Comment, Post, sequelize };
