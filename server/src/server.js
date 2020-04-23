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

// const apiKey =
//   "8NIWbBnXI2Nlb0Oe2x5AH8lodMz4PYRanGhWITmE9D_7HpaNvrLndT8ZTqifDvEKp6BM9jEA98-Az9C_2lqGNorKBg38lD_Vdr_VXZcFQ37AaU1_4_ekGIH5xR-WXnYx";
//
// const client = yelp.client(apiKey);
//
// client
//   .search({
//     term: "burger",
//     location: "union square, nyc",
//     sort_by: "review_count"
//   })
//   .then(response => {
//     let searchResults = response.jsonBody;
//     console.log(response.jsonBody.businesses[0].name);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// const client = yelp.client(apiKey);
//
// client
//   .search(searchRequest)
//   .then(response => {
//     // const firstResult = response.jsonBody.businesses[0];
//     const results = response.jsonBody;
//     // searchResults = JSON.stringify(results, null, 4);
//     console.log(results);
//   })
//   .catch(e => {
//     console.log(e);
//   });

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
