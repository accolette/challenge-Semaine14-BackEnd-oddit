import { AppUser, Category, Post } from "../models/index.js";

export async function getAllPosts(req, res, next) {
  const posts = await Post.findAll({
    attributes: { exclude: ["appUser_id"] },
    include: [
      {
        model: AppUser,
        as: "author",
        attributes: ["pseudo"],
      },
      {
        model: Category,
        as: "categories",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  res.status(200).json(posts);
}

export async function createPost(req, res, next) {
  console.log(req.body);
  const post = await Post.create(req.body);
  await post.addCategory(req.body.category_id);

  res.status(201).json(post);
}
