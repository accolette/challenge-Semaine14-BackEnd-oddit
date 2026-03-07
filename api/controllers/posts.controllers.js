import { AppUser, Post } from "../models/index.js";

export async function getAllPosts(req, res, next) {
  const posts = await Post.findAll({
    attributes: { exclude: ["appUser_id"] },
    include: {
      model: AppUser,
      as: "author",
      attributes: ["id", "pseudo"],
    },
  });
  res.status(200).json(posts);
}
