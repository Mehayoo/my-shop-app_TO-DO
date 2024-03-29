// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema({
//   totalPrice: Number,
//   products: [
//     {
//       productId: Number,
//       quantity: Number,
//       productName: String,
//       price: Number,
//     },
//   ],
// });

// module.exports = mongoose.model("Cart", CartSchema);

module.exports = function Cart(cart) {
  this.items = cart.items || {};
  this.totalItems = cart.totalItems || 0;
  this.totalPrice = cart.totalPrice || 0;

  this.getItems = () => {
    const arr = [];
    this.items.forEach((id) => arr.push(this.items[id]));
    return arr;
  };

  this.add = (item, id) => {
    let cartItem = this.items[id]; //The property names of an object can be strings or numbers. In case the property names are numbers, they must be accessed using the “bracket notation” like this

    if (!cartItem || !Object.keys(cartItem).length) {
      cartItem = this.items[id] = { item: item, quantity: 0, price: 0 };
    }
    cartItem.quantity++;
    cartItem.price = cartItem.item.price * cartItem.quantity;
    this.totalItems++;
    this.totalPrice += cartItem.item.price;
  };

  this.subtract = (id) => {
    let cartItem = this.items[id]; //The property names of an object can be strings or numbers. In case the property names are numbers, they must be accessed using the “bracket notation” like this

    if (cartItem.quantity === 1) {
      return;
    }
    cartItem.quantity--;
    cartItem.price -= cartItem.item.price;
    this.totalItems--;
    this.totalPrice -= cartItem.item.price;
  };

  this.remove = (id) => {
    this.totalItems -= this.items[id].quantity;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };
};
