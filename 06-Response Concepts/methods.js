// 📘 Response Methods Examples in Express.js

import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json()); // to handle JSON body

// 1️⃣ res.send() — Send text or HTML
app.get("/send", (req, res) => {
  res.send("<h2>Hello Code Queen 👑 — This is res.send()</h2>");
});

// 2️⃣ res.json() — Send JSON response
app.get("/json", (req, res) => {
  res.json({ message: "Success", user: "Code Queen", status: 200 });
});

// 3️⃣ res.status() — Set status code
app.get("/status", (req, res) => {
  res.status(404).send("❌ Page Not Found");
});

// 4️⃣ res.redirect() — Redirect to another route
app.get("/redirect", (req, res) => {
  res.redirect("/send");
});

// 5️⃣ res.sendFile() — Send a file (make sure path exists)
import path from "path";
const __dirname = path.resolve();

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 6️⃣ res.download() — Prompt file download
app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "example.txt"));
});

// 7️⃣ res.render() — Render a view template (for EJS or Pug)
app.set("view engine", "ejs");
app.get("/render", (req, res) => {
  res.render("home", { title: "Hello Code Queen 👑" });
});

// 8️⃣ res.end() — End response manually
app.get("/end", (req, res) => {
  res.write("Processing complete...");
  res.end();
});

// 9️⃣ res.type() — Set Content-Type
app.get("/type", (req, res) => {
  res.type("html").send("<h3>HTML type set using res.type()</h3>");
});

// 🔟 res.set() or res.header() — Set custom header
app.get("/set", (req, res) => {
  res.set("X-Powered-By", "Code Queen Express");
  res.send("Custom header added!");
});

// 1️⃣1️⃣ res.cookie() — Set a cookie
import cookieParser from "cookie-parser";
app.use(cookieParser());

app.get("/cookie", (req, res) => {
  res.cookie("username", "CodeQueen", { maxAge: 60000 }); // expires in 1 minute
  res.send("🍪 Cookie has been set!");
});

// 1️⃣2️⃣ res.clearCookie() — Clear a cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("🧹 Cookie cleared!");
});

// 🚀 Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
