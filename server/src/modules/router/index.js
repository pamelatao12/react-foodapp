const express = require("express");
const path = require("../path");
const user = require("../user");
const events = require("../events");
const router = express.Router();

router.get("/", (req, res) => res.send("hello world"));

path.initializeRoutes(router);
user.initializeUserRoutes(router);
events.initializeEventRoutes(router);
exports.router = router;
// export default router;
