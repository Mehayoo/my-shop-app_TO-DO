import React, { useContext } from "react";
import PropTypes from "prop-types";
import ScrollArea from "react-scrollbar";
import CartContext from "../../../context/cart/cartContext";
import { Button, Image, Text, Spinner } from "../../index";
import "./CartContent.scss";

const CartContent = ({ cart = {}, loading = null }) => {
  const { totalPrice, totalItems, items } = cart;

  const cartContext = useContext(CartContext);
  const { deleteCartProduct } = cartContext;

  return (
    <div className="ms-cartContent">
      {cart && Object.keys(cart).length && !loading ? (
        <>
          <div className="ms-cartContent__title">
            <Text as={"h4"}>Total: {totalPrice} RON</Text>
            <Text as={"h5"}>Quantity: {totalItems} </Text>
            <Button
              as="div"
              classes="red waves-effect waves-light btn-large center"
              iconPos="right"
              iconName="card_giftcard"
              name="Checkout"
              func={() => {}}
            />
          </div>
          <ul>
            <ScrollArea
              speed={0.8}
              autoHide={false}
              className="ms-cartContent__scroll-bar"
              horizontal={false}
            >
              {Object.keys(items).map((key) => {
                return (
                  <li className="row" key={items[key].item._id}>
                    <Image
                      src={`http://localhost:5000${items[key].item.image}`}
                      className="responsive-img col s4"
                    />
                    <span>{items[key].item.productName}</span>
                    <Text as={"p"}>
                      Subtotal: {items[key].price}{" "}
                      {cart.items[key].item.currency}
                      <br />
                      Quantity: {items[key].quantity}
                    </Text>
                    <div className="ms-cartContent__actions">
                      <Button
                        as="div"
                        classes="waves-effect btn-flat"
                        iconName="remove"
                        func={() => {}}
                      />
                      <Button
                        as="div"
                        classes="waves-effect btn-flat"
                        iconName="delete"
                        func={() => {
                          deleteCartProduct(items[key].item._id);
                        }}
                      />
                      <Button
                        as="div"
                        classes="waves-effect btn-flat"
                        iconName="add"
                        func={() => {}}
                      />
                    </div>
                  </li>
                );
              })}
            </ScrollArea>
          </ul>
        </>
      ) : (
        <Spinner classes={"ms-spinner__cartContent"} />
      )}
    </div>
  );
};

CartContent.propTypes = {
  cart: PropTypes.object,
  loading: PropTypes.bool,
};

export default CartContent;
