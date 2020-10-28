const path = require("path");
//const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const Cart = require("../models/Cart");
const Product = require("../models/Product");

// @description     Get cart products
// @route           GET /api/v1/cart
// @access          Public
exports.getCart = asyncHandler(async (req, res, next) => {
  if (!req.session.cart) {
    res.json({});
  } else {
    const cart = new Cart(req.session.cart);
    res.json(cart);
  }
});

// @description     Add products to cart
// @route           GET /api/v1/cart/add/:id
// @access          Public
exports.addCartProducts = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;

  const cart = new Cart(
    req.session.cart && Object.keys(req.session.cart).length
      ? req.session.cart
      : {}
  );

  const product = await Product.findById(productId);

  cart.add(product, productId);

  req.session.cart = cart;

  res.json(req.session.cart);
});

// @description     Subtract product from cart
// @route           GET /api/v1/cart/sub/:id
// @access          Public
exports.subtractCartProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;

  const cart = new Cart(
    req.session.cart && Object.keys(req.session.cart).length
      ? req.session.cart
      : {}
  );

  cart.subtract(productId);

  req.session.cart = cart;

  res.json(req.session.cart);
});

// @description     Delete products from cart
// @route           GET /api/v1/cart/remove/:id
// @access          Public
exports.deleteCartProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;

  const cart = new Cart(
    req.session.cart && Object.keys(req.session.cart).length
      ? req.session.cart
      : {}
  );

  cart.remove(productId);

  req.session.cart = cart;

  res.json(req.session.cart);
});
