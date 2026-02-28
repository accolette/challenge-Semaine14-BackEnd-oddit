import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize-client.js";

export class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, tableName: "post" },
);
