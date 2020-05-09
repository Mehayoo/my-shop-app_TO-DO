import React, { useEffect } from "react";
import ProductsState from "./context/products/ProductsState";
import Header from "./components/organisms/Header/Header";
import Button from "./components/atoms/Button/Button";
import Image from "./components/atoms/Image/Image";
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
      <Image style={{ width: "300px" }} height="300px" />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        facere eligendi reiciendis molestias autem aperiam quisquam magni culpa,
        deleniti quidem nesciunt? Facere atque minima, doloremque unde sed optio
        dolorem architecto?
      </div>
    </div>
  );
};

export default App;
