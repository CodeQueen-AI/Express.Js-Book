// Import required packages
const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

// Temporary fake "database"
let users = [];

// ===============================
// 🔹 SIGNUP - Hash the password
// ===============================
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user with hashed password
    const newUser = { username, password: hashedPassword };
    users.push(newUser);

    res.status(201).send("User registered successfully ✅");
  } catch (err) {
    res.status(500).send("Error while signing up ❌");
  }
});

// ===============================
// 🔹 LOGIN - Compare password
// ===============================
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(404).send("User not found ❌");

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.send("Login successful ✅");
    } else {
      res.status(401).send("Invalid password ❌");
    }
  } catch (err) {
    res.status(500).send("Error while logging in ❌");
  }
});

// ===============================
// 🔹 SERVER START
// ===============================
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
