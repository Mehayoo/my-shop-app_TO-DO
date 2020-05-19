const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Please add a productId"],
  },
  productName: {
    type: String,
    required: [true, "Please add a name for the product"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price for the product"],
  },
  currency: {
    type: String,
    required: [true, "Please add a currency for the product"],
  },
  productDescription: {
    type: String,
    required: [true, "Please add a description for the product"],
  },
  image: {
    type: String,
    required: [true, "Please add an image for the product"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
