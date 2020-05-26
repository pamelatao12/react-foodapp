const express = require("express");
const path = require("../path");
const user = require("../user");
const router = express.Router();

router.get("/", (req, res) => res.send("hello world"));

path.initializeRoutes(router);
user.initializeUserRoutes(router);
exports.router = router;
// export default router;
