"use strict";

const express = require("express");
var cors = require("cors");
const http = require("http");
var path = require("path");
const app = express();
const fetch = require("node-fetch");
const yelp = require("yelp-fusion");
const bodyParser = require("body-parser");
const router = require("./modules/router");
const database = require("./modules/firebase/index");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(router.router);

// Prettify JSON responses.
app.set("json spaces", 2);

// Parsing request application/json.
app.use(bodyParser.json());

// Support encoded request bodies.
app.use(bodyParser.urlencoded({ extended: false }));

//test write to database
const createUser = async (userId, name, email) => {
  database.set("users/" + userId, {
    username: name,
    email: email
  });
  // return { [key]: user };
};

app.listen(PORT, () => {
  createUser("2", "userName", "name@gmail.com");
  console.log(`Example app listening at http://localhost:${PORT}`);
});
