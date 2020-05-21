import React, { useEffect } from "react";
import ProductsState from "./context/products/ProductsState";
import AssetsState from "./context/assets/AssetsState";
import CartState from "./context/cart/CartState";
import { Header, Body, Footer, Button, Image } from "./components/index";
import "./App.scss";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <CartState>
      <ProductsState>
        <AssetsState>
          <div className="ms-app">
            <Header />
            <Body />
          </div>
          <Footer />
        </AssetsState>
      </ProductsState>
    </CartState>
  );
};

export default App;
