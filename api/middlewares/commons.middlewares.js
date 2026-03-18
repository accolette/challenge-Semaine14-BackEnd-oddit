import { writeToLog } from "../utils/commons.utils.js";

export function checkBody(schema, body, res, next) {
  const validation = schema.validate(body, { abortEarly: false });
  if (validation.error) {
    return res.status(400).json({
      error: true,
      message: "Joi validation error",
      details: validation.error.details,
    });
  }
  next();
}

// ================== 404 Handler ==================

export const notFoundHandler = (req, res) => {
  writeToLog(`ERROR 404 : Route ${req.originalUrl} not found`);
  return res.status(404).json({
    status: 404,
    error: "Not Found",
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
};

// ================== 500 Handler ==================

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;

  // Log serveur
  writeToLog(`ERROR 500 : ${err.message}`);

  return res.status(statusCode).json({
    status: statusCode,
    error: statusCode === 500 ? "Internal Server Error" : err.name || "Error",
    message:
      process.env.NODE_ENV === "production" && statusCode === 500
        ? "An unexpected error occurred"
        : err.message || "Something went wrong",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
