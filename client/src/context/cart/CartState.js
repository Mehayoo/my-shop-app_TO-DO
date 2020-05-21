import React, { useReducer } from "react";
import axios from "axios";
import cartContext from "./cartContext";
import CartReducer from "./cartReducer";
import regeneratorRuntime from "regenerator-runtime";
import { SET_LOADING, GET_CART, ADD_PRODUCT } from "../types";

const CartState = (props) => {
  const initialState = {
    cart: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getCart = async () => {
    setLoading();

    const transport = axios.create({
      withCredentials: true,
    });
    const res = await transport.get(`http://localhost:5000/api/v1/cart`);

    dispatch({ type: GET_CART, payload: res.data });
  };

  const addProduct = async (id) => {
    setLoading();

    const transport = axios.create({
      withCredentials: true,
    });
    const res = await transport.get(
      `http://localhost:5000/api/v1/cart/add/${id}`
    );

    console.log("RES.DATA: ", res.data);

    dispatch({ type: ADD_PRODUCT, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <cartContext.Provider
      value={{ loading: state.loading, cart: state.cart, getCart, addProduct }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartState;
