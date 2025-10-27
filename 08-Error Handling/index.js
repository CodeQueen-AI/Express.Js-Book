import express from "express";
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Normal route
app.get("/", (req, res) => {
  res.send("Welcome to Error Handling Example!");
});

// Route that throws custom error
app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong on this route!");
  err.status = 500; // Custom status code
  next(err); // Pass error to error middleware
});

// 404 Handler (if route not found)
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500); // Default 500 if no status
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));