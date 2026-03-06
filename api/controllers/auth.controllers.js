import argon2 from "argon2";

import { AppUser } from "../models/index.js";

export async function registerUser(req, res, next) {
  req.body.password = await argon2.hash(req.body.password);

  try {
    const user = await AppUser.create(req.body);
    res.status(201).json({ "New user created : ": user });
  } catch (error) {
    res.status(500).json(error);
  }
}
