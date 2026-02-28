import { Sequelize } from "sequelize";
import "dotenv/config";

const PG_URL = process.env.PG_URL;
console.log(PG_URL);
export const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres",
  define: {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
  },
});

try {
  await sequelize.authenticate();
  console.log("✅ Connection OK");
} catch (error) {
  console.error("❌ DB connection failed:", error);
}
