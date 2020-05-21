import React from "react";
import { Navbar, Banner, Spinner } from "../../index";
import "./Header.scss";

const Header = () => {
  return (
    <header className="ms-header">
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
