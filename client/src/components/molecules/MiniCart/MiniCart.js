import React from "react";
import PropTypes from "prop-types";
import { Text, CartContent } from "../../index";
import "./MiniCart.scss";

const MiniCart = ({ cart = {}, loading = null }) => {
  const { items } = cart;

  return (
    <div className="ms-miniCart">
      {!items || !Object.keys(items).length ? (
        <div className="ms-miniCart__cartEmpty">
          <Text as={"h4"}>No products.</Text>
          <Text as={"h5"}>Cart is Empty.</Text>
        </div>
      ) : (
        <CartContent cart={cart} loading={loading} />
      )}
    </div>
  );
};

MiniCart.propTypes = {
  cart: PropTypes.object,
  loading: PropTypes.bool,
};

export default MiniCart;
