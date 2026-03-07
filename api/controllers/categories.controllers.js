import { Category } from "../models/index.js";

export async function getAllCategories(req, res, next) {
  const categories = await Category.findAll({ attributes: ["name"] });
  res.status(200).json(categories);
}
