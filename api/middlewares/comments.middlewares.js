import Joi from "joi";

import { checkBody } from "./commons.middlewares.js";

export function validateCommentCreation(req, res, next) {
  const validateSchema = Joi.object({
    content: Joi.string().required(),
    post_id: Joi.number().integer().positive().required(),
  });
  checkBody(validateSchema, req.body, res, next);
}

export function validateCommentUpdate(req, res, next) {
  const validateSchema = Joi.object({
    content: Joi.string().required(),
  });
  checkBody(validateSchema, req.body, res, next);
}
