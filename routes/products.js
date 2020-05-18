const express = require("express");
const { getProducts } = require("../controllers/products");

const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router.route("/").get(getProducts);

module.exports = router;
