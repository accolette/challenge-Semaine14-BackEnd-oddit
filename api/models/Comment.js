import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize-client.js";

export class Comment extends Model {}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, tableName: "comment" },
);
