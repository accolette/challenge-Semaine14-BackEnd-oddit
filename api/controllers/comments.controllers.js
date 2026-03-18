import { AppUser, Category, Post, Comment } from "../models/index.js";
import { notFound } from "../utils/commons.utils.js";

export async function getOneComment(req, res, next) {
  if (isNaN(req.params.id)) {
    writeToLog(`ERROR 400 : Invalid ID : ${req.params.id}`);
    return res.status(400).json({ error: "Invalid ID" });
  }

  const comment = await Comment.findByPk(req.params.id);

  if (comment === 0 || !comment) {
    return next(notFound("Comment not found"));
  }
  res.status(200).json(comment);
}

export async function createComment(req, res, next) {
  const { content, post_id } = req.body;

  const comment = await Comment.create({
    content,
    post_id,
    appUser_id: req.user.user_id,
  });

  res.status(201).json(comment);
}

export async function updateComment(req, res, next) {
  if (isNaN(req.params.id)) {
    writeToLog(`ERROR 400 : Invalid ID : ${req.params.id}`);
    return res.status(400).json({ error: "Invalid ID" });
  }

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
    return next(notFound("Comment not found"));
  }

  res.status(200).json(await Comment.findByPk(req.params.id));
}

export async function deleteComment(req, res, next) {
  if (isNaN(req.params.id)) {
    writeToLog(`ERROR 400 : Invalid ID : ${req.params.id}`);
    return res.status(400).json({ error: "Invalid ID" });
  }

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
    return next(notFound("Comment not found"));
  }
  res.status(204).json(`Commentaire numéro ${req.params.id} supprimé`);
}
