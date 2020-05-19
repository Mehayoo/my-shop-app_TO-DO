import React, { useEffect } from "react";
import ProductsState from "./context/products/ProductsState";
import AssetsState from "./context/assets/AssetsState";
import { Header, Body, Footer, Button, Image } from "./components/index";
import "./App.scss";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  const onSubmit = () => {
    console.log("Submit");
  };

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <ProductsState>
      <AssetsState>
        <div className="ms-app">
          <Header />
          <Body />
          <Button
            as="a"
            classes="red waves-effect waves-light btn-large"
            iconPos="right"
            iconName="card_giftcard"
            name="Checkout"
            func={() => onSubmit()}
          />
          <Image style={{ width: "30rem" }} height="30rem" />
        </div>
        <Footer />
      </AssetsState>
    </ProductsState>
  );
};

export default App;
