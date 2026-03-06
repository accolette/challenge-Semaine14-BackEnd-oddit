import "dotenv/config";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

import { AppUser } from "../models/index.js";

export async function registerUser(req, res, next) {
  req.body.password = await argon2.hash(req.body.password);

  try {
    const user = await AppUser.create(req.body);
    return res.status(201).json(`New user created : ${user.pseudo}`);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Pseudo or email already exists" });
    }
    return res.status(500).json(error);
  }
}

export async function loginUser(req, res, next) {
  try {
    const user = await AppUser.findOne({ where: { email: req.body.email } });
    if (!user || !(await argon2.verify(user.password, req.body.password))) {
      res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ user: user.pseudo, token });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getConnectedUser(req, res, next) {
  const user = await AppUser.findByPk(req.user.user_id);
  console.log(user);
  return res.status(200).json({
    first_name: user.first_name,
    last_name: user.last_name,
    pseudo: user.pseudo,
    email: user.email,
  });
}
