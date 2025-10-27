// Import Express
import express from "express";

const app = express();
const port = 3000;

// ✅ Response Object Example
app.get("/", (req, res) => {
  // res = response object
  // It is used to send data from server → client
  res.send("This is the Response Object Example");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
