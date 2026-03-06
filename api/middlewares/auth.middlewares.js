import JoiBase from "joi";
import { joiPasswordExtendCore } from "joi-password";
import { checkBody } from "./commons.middlewares.js";

const Joi = JoiBase.extend(joiPasswordExtendCore);

export function validateUserRegistration(req, res, next) {
  const validateSchema = Joi.object({
    first_name: Joi.string().max(128).required(),
    last_name: Joi.string().max(128).required(),
    pseudo: Joi.string().max(128).required(),
    email: Joi.string().email().max(128).required(),
    password: Joi.string()
      .min(8)
      .minOfSpecialCharacters(1)
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required(),
  });
  checkBody(validateSchema, req.body, res, next);
}
