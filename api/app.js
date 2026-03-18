import express from "express";
import "dotenv/config";
import cors from "cors";
import { xss } from "express-xss-sanitizer";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import authRoutes from "./routes/auth.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import postsRoutes from "./routes/posts.routes.js";
import commentsRoutes from "./routes/comments.routes.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/commons.middlewares.js";

// ================== SETTINGS ==================

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://monfront.com"]
    : [`http://localhost:${PORT}`];
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "O-ddit API",
      version: "1.0.0",
      description: "Documentation de l'API de forum multidisciplinaire",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Allows the client to contact the API
app.use(cors({ origin: allowedOrigins }));
// Protects against XSS injections
app.use(xss());
// Parses JSON request bodies: required to read req.body in POST / PATCH / PUT requests. Using a limit for payload attac
app.use(express.json({ limit: "10kb" }));
// Standard headers reforced, hidden infos and XSS attack blocker
app.use(helmet());
// Swagger for docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ================== ROUTES ==================

app.use("/auth", authRoutes);
app.use("/categories", categoriesRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);

app.use(notFoundHandler); // 404
app.use(errorHandler); // 500

// ================== LISTENER ==================

app.listen(PORT, () => {
  console.log(`Serveur is running at http://localhost:${PORT}/`);
});
