const express = require("express");
const path = require("../path");
const router = express.Router();

router.get("/", (req, res) => res.send("hello world"));

// const initializeRoutes = router => {
//   router.get("/search", getSearchResults);
// };
//
// const yelp = require("yelp-fusion");
//
// const apiKey =
//   "8NIWbBnXI2Nlb0Oe2x5AH8lodMz4PYRanGhWITmE9D_7HpaNvrLndT8ZTqifDvEKp6BM9jEA98-Az9C_2lqGNorKBg38lD_Vdr_VXZcFQ37AaU1_4_ekGIH5xR-WXnYx";
//
// const client = yelp.client(apiKey);
//
// const getSearchResults = (req, res) => {
//   const { keyword, location } = req.query;
//   client
//     .search({
//       term: keyword,
//       location: location,
//       sort_by: "review_count"
//     })
//     .then(response => {
//       let searchResults = response.jsonBody;
//       console.log(response.jsonBody.businesses[0].name);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// };

path.initializeRoutes(router);
exports.router = router;
// export default router;
