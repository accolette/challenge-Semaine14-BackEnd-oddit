import { AppUser, Category, Post, Comment } from "../models/index.js";

export async function getOneComment(req, res, next) {
  const comment = await Comment.findByPk(req.params.id);
  if (comment === 0 || !comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.status(200).json(comment);
}

export async function createComment(req, res, next) {
  const { content, post_id } = req.body;
  console.log({
    content,
    post_id,
    appUser_id: req.user.user_id,
  });

  const comment = await Comment.create({
    content,
    post_id,
    appUser_id: req.user.user_id,
  });

  res.status(201).json(comment);
}

export async function updateComment(req, res, next) {
  const actualUser = req.user;
  const comment = await Comment.findByPk(req.params.id);
  const commentAuthor = comment.appUser_id;

  if (actualUser.user_id !== commentAuthor) {
    return res
      .status(401)
      .json({ error: "Unauthorized : Only author can edit comment" });
  }

  const commentUpdated = await Comment.update(req.body, {
    where: { id: comment.id },
  });
  if (commentUpdated === 0 || !commentUpdated) {
    return res.status(404).json({ error: "Comment not found" });
  }

  res.status(200).json(await Comment.findByPk(req.params.id));
}

export async function deleteComment(req, res, next) {
  const actualUser = req.user;
  const comment = await Comment.findByPk(req.params.id);
  const commentAuthor = comment.appUser_id;

  if (actualUser.user_id !== commentAuthor) {
    return res
      .status(401)
      .json({ error: "Unauthorized : Only author can delete comment" });
  }

  const deletedCount = await Comment.destroy({
    where: { id: req.params.id },
  });
  if (deletedCount === 0 || !deletedCount) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.status(214).json(`Commentaire numéro ${req.params.id} supprimé`);
}
