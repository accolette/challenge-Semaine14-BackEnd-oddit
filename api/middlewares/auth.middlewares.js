import "dotenv/config";
import JoiBase from "joi";
import jwt from "jsonwebtoken";
import { joiPasswordExtendCore } from "joi-password";
import { checkBody } from "./commons.middlewares.js";
import { AppUser } from "../models/AppUser.js";

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

export function validateUserUpdate(req, res, next) {
  const validateSchema = Joi.object({
    first_name: Joi.string().max(128),
    last_name: Joi.string().max(128),
    pseudo: Joi.string().max(128),
    email: Joi.string().email().max(128),
    password: Joi.string()
      .min(8)
      .minOfSpecialCharacters(1)
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces(),
  });
  checkBody(validateSchema, req.body, res, next);
}

export function validateUserLogin(req, res, next) {
  const validateSchema = Joi.object({
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

export async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (!(await AppUser.findByPk(req.user.user_id))) {
      return res.status(401).json({ error: "Invalid user" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
