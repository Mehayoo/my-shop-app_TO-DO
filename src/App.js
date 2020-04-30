import React, { useEffect } from "react";
import Button from "./components/atoms/Button/Button";
import Image from "./components/atoms/Image/Image";

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
    <div className="App">
      <h1>Headerr</h1>
      <hr />
      <Button
        as="a"
        classes="red waves-effect waves-light btn-large"
        iconPos="right"
        iconName="card_giftcard"
        name="Checkout"
        func={() => onSubmit()}
      />
      <Image style={{ width: "300px" }} height="300px" />
    </div>
  );
};

export default App;
