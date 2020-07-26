// const path = require("path");
// //const ErrorResponse = require("../utils/errorResponse");
// const asyncHandler = require("../middleware/async");

// const Cart = require("../models/Cart");

// // @description     Get all cart products
// // @route           GET /api/v1/cart
// // @access          Public
// exports.getCartProducts = asyncHandler(async (req, res, next) => {
//   const cart = await Cart.find();
//   res.status(200).json({
//     success: true,
//     count: cart.length,
//     cartProducts: cart,
//   });
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const path = require("path");
// //const ErrorResponse = require("../utils/errorResponse");
// const asyncHandler = require("../middleware/async");

// //Get Product model
// const Product = require("../models/Product");

// // @description     Get all cart products
// // @route           GET /api/v1/cart
// // @access          Public
// exports.getCartProducts = asyncHandler(async (req, res, next) => {
//   const productId = req.params.product;

//   Product.findOne({ productId: productId }, (err, p) => {
//     if (err) console.log(err);

//     if (typeof req.session.cart === undefined) {
//       req.session.cart = [];
//       req.session.cart.push({
//         title: slug,
//         quantity: 1,
//         price: parseFloat(p.price).toFixed(2),
//         image: "/products" + p._id + p.image,
//       });
//     } else {
//       const cart = req.session.cart;
//       const newItem = true;

//       for (let i = 0; i < cart.length; i++) {
//         if (cart[i].title === slug) {
//           cart[i].quantity++;
//           newItem = false;
//           break;
//         }
//       }

//       if (newItem) {
//         cart.push({
//           title: slug,
//           quantity: 1,
//           price: parseFloat(p.price).toFixed(2),
//           image: "/products" + p._id + p.image,
//         });
//       }
//     }

//     console.log(req.session.cart);
//     res.redirect("back");
//   });
// });

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
