import React, { useContext } from "react";
import CartContext from "../../../context/cart/cartContext";
import { Image, Link, Button } from "../../index";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({
  item: {
    _id = "",
    productName = "",
    price = null,
    currency = "",
    productDescription = "",
    image = "",
  },
}) => {
  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  return (
    <div className="card">
      <div className="card-image">
        <Image src={`http://localhost:5000${image}`} alt={productName} />
        <Button
          classes={"btn-floating halfway-fab waves-effect waves-light red"}
          iconName={"add"}
          func={() => addProduct(_id)}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{productName}</span>
        <p>{productDescription}</p>
        <p>
          <b>
            Price: {price} {currency}
          </b>
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
