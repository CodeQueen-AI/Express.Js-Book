import express from "express";
const app = express();
const PORT = 3000;

// ✅ Middleware to parse JSON data
app.use(express.json());

// ✅ POST route to handle JSON data
app.post("/json", (req, res) => {
  // Accessing parsed JSON data
  const userData = req.body;
  console.log("Received JSON data:", userData);

  res.send(`Received JSON data: ${JSON.stringify(userData)}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
