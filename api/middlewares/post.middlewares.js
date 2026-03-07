import Joi from "joi";

import { checkBody } from "./commons.middlewares.js";
import { AppUser } from "../models/AppUser.js";

export function validatePostCreation(req, res, next) {
  const validateSchema = Joi.object({
    title: Joi.string().max(255).required(),
    content: Joi.string().required(),
    appUser_id: Joi.number().integer().positive().required(),
    category_id: Joi.array()
      .items(Joi.number().integer().positive())
      .required(),
  });
  checkBody(validateSchema, req.body, res, next);
}
