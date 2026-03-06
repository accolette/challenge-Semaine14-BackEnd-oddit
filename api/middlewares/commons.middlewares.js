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
