//Async and Await
import express from "express";
const app = express();
const PORT = 8000;

app.get("/data", async (req, res) => {
  const data = await Promise.resolve(["user1", "user2", "user3"]); 
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});


//Async/Await Error Handling
import express from "express";
const app = express();
const PORT = 8000;

// Async/Await with error handling
app.get("/data", async (req, res) => {
  try {
    const data = await Promise.reject("Database not connected!");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong ❌", error: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});