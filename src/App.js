import React, { useEffect } from "react";
import ProductsState from "./context/products/ProductsState";
import AssetsState from "./context/assets/AssetsState";
import { Header, Footer, Button, Image } from "./components/index";
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
          <Button
            as="a"
            classes="red waves-effect waves-light btn-large"
            iconPos="right"
            iconName="card_giftcard"
            name="Checkout"
            func={() => onSubmit()}
          />
          <Image style={{ width: "30rem" }} height="30rem" />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            facere eligendi reiciendis molestias autem aperiam quisquam magni
            culpa, deleniti quidem nesciunt? Facere atque minima, doloremque
            unde sed optio dolorem architecto?
          </div>
        </div>
        <Footer />
      </AssetsState>
    </ProductsState>
  );
};

export default App;
