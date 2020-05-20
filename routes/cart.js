const express = require("express");
const router = express.Router();
const { addCartProducts, getCart } = require("../controllers/cart");

const advancedResults = require("../middleware/advancedResults");

router.route("/add/:id").get(addCartProducts);
router.route("/").get(getCart);

module.exports = router;
