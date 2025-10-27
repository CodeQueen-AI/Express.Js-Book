// Import Express
import express from "express";
const app = express();
const PORT = 3000;

// Middleware to read JSON data from client
app.use(express.json());

// ✅ Request Object Example
app.get("/", (req, res) => {
  // 'req' represents the request coming from the client
  console.log("Request Object:", req);

  res.send("This is the Request Object Example — showing incoming data!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
