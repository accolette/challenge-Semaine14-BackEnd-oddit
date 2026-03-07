import express from "express";
import "dotenv/config";
import cors from "cors";
import { xss } from "express-xss-sanitizer";

import authRoutes from "./routes/auth.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import { errorHandler } from "./middlewares/commons.middlewares.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Allows the client to contact the API
app.use(cors());
// Protects against XSS injections
app.use(xss());
// Parses JSON request bodies: required to read req.body in POST / PATCH / PUT requests
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/categories", categoriesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Serveur is running at http://localhost:${PORT}/`);
});
