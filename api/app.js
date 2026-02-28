import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("coucou");
});

app.listen(3000, () => {
  console.log(`Serveur is running at http://localhost:${PORT}/`);
});
