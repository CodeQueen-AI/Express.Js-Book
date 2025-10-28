// Import required packages
const express = require("express");
const bcrypt = require("bcryptjs"); // For password hashing

const app = express();
app.use(express.json()); // To read JSON data from request body

// Fake database (array)
let users = [];

// ===============================
// 🔹 SIGNUP (User Registration)
// ===============================
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user (in fake database)
  users.push({ username, password: hashedPassword });
  res.send("User registered successfully!");
});

// ===============================
// 🔹 LOGIN (User Login)
// ===============================
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  // Compare entered password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).send("Incorrect password");
  res.send("Login successful!");
});

// ===============================
// 🔹 START SERVER
// ===============================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
