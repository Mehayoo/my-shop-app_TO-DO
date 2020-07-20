import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Overlay, Popover } from "react-bootstrap";
import CartContext from "../../../context/cart/cartContext";
import { MiniBasketButton, MiniCart } from "../../index";
import "./MiniBasket.scss";

const MiniBasket = () => {
  const cartContext = useContext(CartContext);
  const { loading, cart, getCart } = cartContext;

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);

  console.log("CART IN MINIBASKET: ", cart);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="ms-minibasket">
      <MiniBasketButton
        toggleOverlay={handleClick}
        quantity={cart.totalItems}
      />
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="MiniBasketPopover" className="mini-basket__popover">
          <Popover.Content className="popover__content">
            <MiniCart cart={cart} loading={loading} />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};

MiniBasket.propTypes = {
  cart: PropTypes.object,
  loading: PropTypes.bool,
};

export default MiniBasket;
