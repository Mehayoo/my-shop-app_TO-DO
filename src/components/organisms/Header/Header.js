import React from "react";
import AssetsState from "../../../context/assets/AssetsState";
import Navbar from "../../molecules/Navbar/Navbar";
import Banner from "../../molecules/Banner/Banner";
import "./Header.scss";

const Header = () => {
  return (
    <AssetsState>
      <header className="ms-header">
        <Navbar />
        <Banner />
      </header>
    </AssetsState>
  );
};

export default Header;
