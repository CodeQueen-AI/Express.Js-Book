import express from "express";
const app = express();
const PORT = 3000;

// ✅ Enable both JSON and form data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);

  res.json({ message: "Data received successfully!", data });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
