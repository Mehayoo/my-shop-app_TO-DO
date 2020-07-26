const express = require("express");
const router = express.Router();
const {
  getCart,
  addCartProducts,
  subtractCartProduct,
  deleteCartProduct,
} = require("../controllers/cart");

const advancedResults = require("../middleware/advancedResults");

router.route("/").get(getCart);
router.route("/add/:id").get(addCartProducts);
router.route("/sub/:id").get(subtractCartProduct);
router.route("/remove/:id").get(deleteCartProduct);

module.exports = router;
