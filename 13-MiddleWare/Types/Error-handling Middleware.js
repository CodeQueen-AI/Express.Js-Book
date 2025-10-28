const express = require("express");
const app = express();

// Normal route
app.get("/", (req, res) => {
  throw new Error("Something went wrong!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, () => console.log("Server started"));
