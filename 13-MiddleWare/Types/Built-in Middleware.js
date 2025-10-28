const express = require("express");
const app = express();

// 🔹 Built-in Middleware
app.use(express.json()); // Handle JSON data
app.use(express.urlencoded({ extended: true })); // Handle form data
app.use(express.static("public")); // Serve static files like images, CSS, JS

// 🔹 Route to test JSON and form data
app.post("/user", (req, res) => {
  res.send({
    message: "Data received successfully!",
    yourData: req.body
  });
});

app.listen(3000, () => console.log("✅ Built-in middleware example running on port 3000"));
