// server.js
import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Access environment variables
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
const APP_NAME = process.env.APP_NAME;

// Route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to ${APP_NAME} 🌸</h1>
    <p>Server running securely with environment variables!</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ ${APP_NAME} is running on http://localhost:${PORT}`);
  console.log(`🔐 Secret Key: ${SECRET_KEY}`);
});
