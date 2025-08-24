require("dotenv").config();
console.log("hello world");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (rew, res) => {
  res.send("razi.twit");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Code with Harry</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
