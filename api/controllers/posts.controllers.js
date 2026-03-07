import { AppUser, Category, Post, Comment } from "../models/index.js";

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
    {
      model: Comment,
      as: "comments",
      attributes: ["appUser_id", "content"],
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
  const { title, content, category_id } = req.body;
  console.log({
    title,
    content,
    category_id,
    appUser_id: req.user.user_id,
  });
  const post = await Post.create({
    title,
    content,
    category_id,
    appUser_id: req.user.user_id,
  });
  await post.addCategories(req.body.category_id);

  res.status(201).json(post);
}

export async function updatePost(req, res, next) {
  const actualUser = req.user;
  const post = await Post.findByPk(req.params.id);
  const postAuthor = post.appUser_id;

  if (actualUser.user_id !== postAuthor) {
    return res
      .status(401)
      .json({ error: "Unauthorized : Only author can edit post" });
  }

  const postUpdated = await Post.update(req.body, { where: { id: post.id } });
  if (postUpdated === 0 || !postUpdated) {
    return res.status(404).json({ error: "Post not found" });
  }
  if (req.body.category_id) {
    await post.setCategories(req.body.category_id);
  }

  res.status(200).json(await Post.findByPk(req.params.id, postDetails));
}

export async function deletePost(req, res, next) {
  const actualUser = req.user;
  const post = await Post.findByPk(req.params.id);
  const postAuthor = post.appUser_id;

  if (actualUser.user_id !== postAuthor) {
    return res
      .status(401)
      .json({ error: "Unauthorized : Only author can delete post" });
  }

  const deletedCount = await Post.destroy({
    where: { id: req.params.id },
  });
  if (deletedCount === 0 || !deletedCount) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.status(214).json(`Post numéro ${req.params.id} supprimé`);
}
