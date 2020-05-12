import React, { useContext, useEffect } from "react";
import AssetsContext from "../../../context/assets/assetsContext";
import { Navbar, Banner, Spinner } from "../../index";
import "./Header.scss";

const Header = () => {
  const assetsContext = useContext(AssetsContext);
  const { icons, getIcons, images, getImages, loading } = assetsContext;

  useEffect(() => {
    getImages();
    getIcons();
    // eslint-disable-next-line
  }, []);
  //"../../../../public/assets/default-monochrome-black.svg"
  //"../../../../public/assets/cover.png"
  console.log("icons in HEADER: ", icons);
  console.log("images in HEADER: ", images);

  return (
    <header className="ms-header">
      {icons.length && images.length && !loading ? (
        <>
          <Navbar icons={icons} images={images} loading={loading} />
          <Banner images={images} />
        </>
      ) : (
        <Spinner />
      )}
    </header>
  );
};

export default Header;
