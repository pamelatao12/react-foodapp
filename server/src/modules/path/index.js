const express = require("express");
const yelp = require("yelp-fusion");

const apiKey =
  "8NIWbBnXI2Nlb0Oe2x5AH8lodMz4PYRanGhWITmE9D_7HpaNvrLndT8ZTqifDvEKp6BM9jEA98-Az9C_2lqGNorKBg38lD_Vdr_VXZcFQ37AaU1_4_ekGIH5xR-WXnYx";

const client = yelp.client(apiKey);

const getSearchResults = (req, res) => {
  const {
    term, // string. Optional.
    location, // string. Required.
    price, // string. Optional. Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$. The price filter can be a list of comma delimited pricing levels. For example, "1, 2, 3" will filter the results to show the ones that are $, $$, or $$$.
    categories, // string. Optional.
    radius, // int. Optional.
    sort_by, // string. Optional. Suggestion to the search algorithm that the results be sorted by one of the these modes: best_match, rating, review_count or distance. The default is best_match.
    limit // int. Optional. Number of business results to return. By default, it will return 20. Maximum is 50.
  } = req.query;
  console.log(req.query);
  // handle if query is undefined
  let searchQueries = {};
  if (term) {
    console.log(term);
    searchQueries.term = term;
  }
  if (location) {
    console.log(location);
    searchQueries.location = location;
  }
  if (price) {
    searchQueries.price = price;
  }
  if (categories) {
    searchQueries.categories = categories;
  }
  if (radius) {
    searchQueries.radius = radius;
  }
  if (sort_by) {
    searchQueries.sort_by = sort_by;
  }
  if (limit) {
    searchQueries.limit = limit;
  }

  client
    .search(searchQueries)
    .then(response => {
      let searchResults = response.jsonBody;
      res.send(searchResults).status(200);
      console.log(response.jsonBody.businesses[0].name);
    })
    .catch(e => {
      console.log(e);
    });
};

const initializeRoutes = router => {
  router.get("/search", getSearchResults);
};

exports.initializeRoutes = initializeRoutes;
