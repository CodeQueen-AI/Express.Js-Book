const express = require("express");
const app = express();

// 🔹 Built-in Middleware
app.use(express.json());

// 🔹 Custom Middleware for Logging
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// 🔹 Custom Middleware for Token Checking
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (token === "secret123") {
    next(); // token is correct → move ahead
  } else {
    res.status(401).json({ message: "Unauthorized access" });
  }
}

// 🔹 Protected API Route
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome Code Queen 👑 to your profile!" });
});

// 🔹 Normal API Route
app.get("/", (req, res) => {
  res.json({ message: "Public route — no token needed!" });
});

app.listen(3000, () => console.log("✅ API middleware example running on port 3000"));
