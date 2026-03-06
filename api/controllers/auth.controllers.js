import { AppUser } from "../models/index.js";

export async function registrate(req, res, next) {
  try {
    const user = await AppUser.create(req.body);
    res.status(201).json({ "New user created : ": user });
  } catch (error) {
    res.status(500).json(error);
  }
}
