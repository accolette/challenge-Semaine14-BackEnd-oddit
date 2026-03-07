import { AppUser, Category, Post } from "../models/index.js";

const postDetails = {
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
};

export async function getAllPosts(req, res, next) {
  const posts = await Post.findAll(postDetails);
  res.status(200).json(posts);
}

export async function getOnePost(req, res, next) {
  const post = await Post.findByPk(req.params.id, postDetails);
  if (post === 0 || !post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.status(200).json(post);
}

export async function createPost(req, res, next) {
  const post = await Post.create(req.body);
  await post.addCategories(req.body.category_id);

  res.status(201).json(post);
}

export async function updatePost(req, res, next) {
  const post = await Post.findByPk(req.params.id);

  const postUpdated = await Post.update(req.body, { where: { id: post.id } });
  if (postUpdated === 0 || !postUpdated) {
    return res.status(404).json({ error: "Post not found" });
  }
  if (req.body.category_id) {
    await post.setCategories(req.body.category_id);
  }

  res.status(201).json(await Post.findByPk(req.params.id, postDetails));
}

export async function deletePost(req, res, next) {
  const deletedCount = await Post.destroy({
    where: { id: req.params.id },
  });
  if (deletedCount === 0 || !deletedCount) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.status(214).json(`Post numéro ${req.params.id} supprimé`);
}
