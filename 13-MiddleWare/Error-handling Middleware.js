const express = require("express");
const app = express();

// 🔹 Example route that throws an error
app.get("/", (req, res) => {
  throw new Error("Something went wrong, Code Queen! 👑");
});

// 🔹 Error-handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).send({
    success: false,
    message: "Internal Server Error - Please try again later!"
  });
});

app.listen(3000, () => console.log("✅ Error-handling middleware example running on port 3000"));
