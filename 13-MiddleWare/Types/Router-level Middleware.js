const express = require("express");
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log("Router Middleware running!");
  next();
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

app.use("/", router);

app.listen(3000, () => console.log("Server started"));
