import React, { useReducer } from "react";
import axios from "axios";
import productsContext from "./productsContext";
import ProductsReducer from "./productsReducer";
import regeneratorRuntime from "regenerator-runtime";
import { SET_LOADING, GET_PRODUCTS } from "../types";

const ProductsState = (props) => {
  const initialState = {
    products: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    setLoading();

    const res = await axios.get("http://localhost:5000/api/v1/products");

    dispatch({ type: GET_PRODUCTS, payload: res.data });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <productsContext.Provider
      value={{ loading: state.loading, products: state.products, getProducts }}
    >
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
