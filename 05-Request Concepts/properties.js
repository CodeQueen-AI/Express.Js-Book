// Import Express
import express from "express";

const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());

// ✅ Route to check Request Properties
app.get("/", (req, res) => {
  // Request Properties
  const method = req.method;     // Tells which HTTP method is used
  const url = req.url;           // Full request URL
  const path = req.path;         // Route path only
  const headers = req.headers;   // All header info from client
  const query = req.query;       // Query parameters (?name=CodeQueen)
  const body = req.body;         // Body data (for POST/PUT requests)

  // Send all properties back as JSON
  res.json({
    method,
    url,
    path,
    headers,
    query,
    body
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
