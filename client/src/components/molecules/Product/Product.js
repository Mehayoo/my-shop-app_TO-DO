import React from "react";
import { Image, Link, Button, Spinner } from "../../index";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({
  item: {
    productName = "",
    price = null,
    currency = "",
    productDescription = "",
    image = "",
  },
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={`http://localhost:5000${image}`} alt={productName} />
        <Link className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </Link>
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
  icons: PropTypes.object.isRequired,
};

export default Product;
