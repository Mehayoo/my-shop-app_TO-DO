import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../index";
import "./MiniBasketButton.scss";

const MiniBasketButton = ({ toggleOverlay, quantity = 0 }) => (
  <div className="ms-miniBasketButton" data-testid="miniBasketButton">
    <Button
      className="nav__link"
      as={"a"}
      func={toggleOverlay}
      iconName={"shopping_cart"}
      iconPos={"left"}
      name={quantity > 0 ? `Cart (${quantity})` : "Cart"}
    />
  </div>
);

MiniBasketButton.propTypes = {
  quantity: PropTypes.number,
  toggleOverlay: PropTypes.func,
};

export default MiniBasketButton;
