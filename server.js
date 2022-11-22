const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  console.log("Request");
  res.json("Hello world");
});

app.listen(port, () => {
  console.log("Server started");
});
