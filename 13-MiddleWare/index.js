const express = require("express");
const app = express();

// 🪄 Simple Middleware
app.use((req, res, next) => {
  console.log("Middleware is running!");
  next(); // Passes control to the next function
});

app.get("/", (req, res) => {
  res.send("Hello Code Queen 👑!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
