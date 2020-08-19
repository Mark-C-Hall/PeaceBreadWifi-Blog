const express = require("express");
require("dotenv").config();

const app = express();

console.log(process.env.PORT);

app.use((req, res, next) => {
  res.send("Welcome to Express!");
});

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});
