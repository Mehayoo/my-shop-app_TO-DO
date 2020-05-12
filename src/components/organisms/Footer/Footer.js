import React, { useContext, useEffect } from "react";
import AssetsContext from "../../../context/assets/assetsContext";
import {
  Image,
  Link,
  Text,
  Preloader,
  NewsletterForm,
  SocialMediaBar,
} from "../../index";
import "./Footer.scss";

const Footer = () => {
  const assetsContext = useContext(AssetsContext);
  const { icons, getIcons, loading } = assetsContext;

  useEffect(() => {
    getIcons();
    // eslint-disable-next-line
  }, []);

  return (
    <footer className="ms-footer">
      {icons.length && !loading ? (
        <>
          <div className="ms-footer__newsletter">
            <NewsletterForm />
          </div>
          <div className="ms-footer__socialMedia">
            <SocialMediaBar icons={icons} />
          </div>
          <div className="ms-footer__copyright">
            <Text as={"p"} style={{ fontWeight: "600", color: "white" }}>
              Copyright 2020 &copy; Mihaiu Sorin-Ionut - MyShopApp
            </Text>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </footer>
  );
};

export default Footer;
