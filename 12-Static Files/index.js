// server.js
import express from "express";
const app = express();
const PORT = 5000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// Route
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
