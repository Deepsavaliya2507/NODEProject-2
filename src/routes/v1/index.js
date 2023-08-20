const express = require("express");
const bookRoutes = require("./book.route");

const router = express.Router();

router.use("/book", bookRoutes)

module.exports = router;