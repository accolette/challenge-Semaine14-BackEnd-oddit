import { sequelize } from "../models/index.js";

// Supprime les tables existantes
await sequelize.drop();

// Recrée selon les modèles
await sequelize.sync({ force: true });

console.log("🗃️ Tables :", await sequelize.getQueryInterface().showAllTables());

await sequelize.close();
