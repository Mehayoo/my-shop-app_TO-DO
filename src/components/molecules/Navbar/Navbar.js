import React, { useContext, useEffect } from "react";
import AssetsContext from "../../../context/assets/assetsContext";
import Logo from "../Logo/Logo";
import Link from "../../atoms/Link/Link";
import Preloader from "../../atoms/Preloader/Preloader";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Navbar.scss";

const Navbar = ({ classes = "" }) => {
  const assetsContext = useContext(AssetsContext);
  const { icons, getIcons, images, getImages, loading } = assetsContext;

  useEffect(() => {
    getImages();
    getIcons();
    // eslint-disable-next-line
  }, []);

  //"../../../../public/assets/default-monochrome-black.svg"

  if (loading || images === null || icons === null) {
    return <Preloader />;
  }

  return (
    <nav className={classnames("ms-navbar", classes)}>
      {icons.length && images.length && !loading ? (
        <div className="ms-navbar__container">
          <div className="ms-navbar__container-logo">
            <Logo
              src={images[0].imageSrc}
              alt={images[0].imageAlt}
              style={{ height: "70%" }}
            />
          </div>
          <div className="ms-navbar__container-nav">
            <ul className="nav__list">
              {icons.map((icon) => (
                <li key={icon.id} className="nav__item">
                  <Link
                    href={"#!"}
                    iconName={icon.iconName}
                    iconPos={"left"}
                    className="nav__link"
                  >
                    {icon.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </nav>
  );
};

Navbar.propTypes = {
  classes: PropTypes.string,
};

export default Navbar;
