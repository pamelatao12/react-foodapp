const express = require("express");
const path = require("../path");
const router = express.Router();

router.get("/", (req, res) => res.send("hello world"));

path.initializeRoutes(router);
exports.router = router;
// export default router;
