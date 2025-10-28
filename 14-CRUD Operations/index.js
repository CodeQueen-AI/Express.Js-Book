// Import Express
const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Sample data (like a fake database)
let users = [
  { id: 1, name: "Code Queen" },
  { id: 2, name: "Anusha" }
];

// ===============================
// 🔹 1. CREATE (POST)
// ===============================
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).send(newUser);
});

// ===============================
// 🔹 2. READ (GET)
// ===============================

// Get all users
app.get("/users", (req, res) => {
  res.send(users);
});

// Get single user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.send(user);
});

// ===============================
// 🔹 3. UPDATE (PUT)
// ===============================
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  res.send(user);
});

// ===============================
// 🔹 4. DELETE (DELETE)
// ===============================
app.delete("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  users = users.filter(u => u.id !== user.id);
  res.send(user);
});

// ===============================
// 🔹 SERVER START
// ===============================
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
