//GET Request
import express from "express";
const app = express();
const PORT = 8000;

app.get("/data", (req, res) => {
  res.send("This is GET request response!");
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
});


//POST Request
import express from "express";
const app = express();
const PORT = 8000;
app.use(express.json());

app.post("/data", (req, res) => {
  const { message } = req.body;
  res.send(`POST request received! Message: ${message}`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
});


//PUT Request
import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json());

let data = { message: "Old Message" };

app.put("/data", (req, res) => {
  data = req.body; 
  res.send(`PUT request: Data replaced! New data: ${JSON.stringify(data)}`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
});


//PATCH Request
import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json());

let data = { message: "Hello" };

app.patch("/data", (req, res) => {
  data = { ...data, ...req.body }; 
  res.send(`PATCH request: Data updated! New data: ${JSON.stringify(data)}`);
});

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
});


//DELETE Request
import express from "express";
const app = express();
const PORT = 8000;

let data = { message: "Hello World" };

app.delete("/data", (req, res) => {
  data = {}; 
  res.send("DELETE request: Data deleted!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});