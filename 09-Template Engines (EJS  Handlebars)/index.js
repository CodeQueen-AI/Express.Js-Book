// Import Express
import express from "express";
const app = express();
const PORT = 3000;

// Tell Express to use EJS as the template engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  const user = { name: "Code Queen 👑", language: "Express.js" };
  // render() looks inside views/ folder for 'home.ejs'
  res.render("home", { user });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
