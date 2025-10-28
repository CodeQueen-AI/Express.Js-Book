// Import express
const express = require("express");
const app = express();

app.use(express.json());

// Fake users (with roles)
const users = [
  { id: 1, name: "Code Queen", role: "admin" },
  { id: 2, name: "Anusha", role: "user" }
];

// 🔹 Middleware for Authorization
function authorizeAdmin(req, res, next) {
  const userRole = req.body.role;

  if (userRole === "admin") {
    next(); // Allow access
  } else {
    res.status(403).send("Access Denied ❌ Only Admins can perform this action");
  }
}

// 🔹 Route accessible only to admin
app.post("/delete-user", authorizeAdmin, (req, res) => {
  res.send("User deleted successfully ✅ (Admin Access)");
});

// 🔹 Normal route (everyone can access)
app.get("/view-profile", (req, res) => {
  res.send("Profile details visible to all users 👀");
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
