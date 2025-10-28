const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// 🔹 Third-party Middleware
app.use(morgan("tiny")); // Logs every request
app.use(cors()); // Allows cross-origin requests
app.use(helmet()); // Adds security headers

app.get("/", (req, res) => {
  res.send("Hello Code Queen 👑 — Third-party middleware running!");
});

app.listen(3000, () => console.log("✅ Third-party middleware example running on port 3000"));
