"use strict";

const express = require("express");
const http = require("http");
var path = require("path");
const app = express();
const fetch = require("node-fetch");
const yelp = require("yelp-fusion");
const bodyParser = require("body-parser");
const router = require("./modules/router");

const PORT = process.env.PORT || 4000;

app.use(router.router);

// Prettify JSON responses.
app.set("json spaces", 2);

// Parsing request application/json.
app.use(bodyParser.json());

// Support encoded request bodies.
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
