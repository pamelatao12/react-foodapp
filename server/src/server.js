const express = require("express");
const http = require("http");
var path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
