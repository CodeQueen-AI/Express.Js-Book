import express from "express";
const app = express();
const PORT = 8000;

app.get("/response-properties", (req, res) => {
  // Set a custom status code
  res.statusCode = 200;

  // Check if headers are sent
  console.log("Headers Sent Before:", res.headersSent);

  // Set some data in res.locals (used with templates like EJS)
  res.locals.message = "This is data stored in res.locals";

  // Log some response properties
  console.log("Status Code:", res.statusCode);
  console.log("App Reference:", res.app ? "App exists" : "No app");
  console.log("Status Message:", res.statusMessage);

  // Send response
  res.send({
    message: "Response Properties Example",
    statusCode: res.statusCode,
    headersSent: res.headersSent,
    locals: res.locals.message,
  });

  // Check again after sending response
  console.log("Headers Sent After:", res.headersSent);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
