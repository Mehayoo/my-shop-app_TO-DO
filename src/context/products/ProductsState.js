import React, { useReducer } from "react";
import axios from "axios";
import productsContext from "./productsContext";
import ProductsReducer from "./productsReducer";
import regeneratorRuntime from "regenerator-runtime";
import {} from "../types";

const ProductsState = (props) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  return (
    <productsContext.Provider value={{}}>
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsState;
