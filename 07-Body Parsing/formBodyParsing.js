import express from "express";
const app = express();
const PORT = 3000;

// ✅ Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// ✅ POST route to handle form data
app.post("/form", (req, res) => {
  // Accessing parsed form data
  const formData = req.body;
  console.log("Received Form data:", formData);

  res.send(`Received Form data: ${JSON.stringify(formData)}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

