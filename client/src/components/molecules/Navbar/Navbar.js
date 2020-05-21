import React from "react";
import { Link, Icon, Logo, MiniBasket } from "../../index";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Navbar.scss";

const Navbar = ({ classes = "", ...props }) => {
  return (
    <nav className={classnames("ms-navbar", classes)}>
      <div className="ms-navbar__container">
        <div className="ms-navbar__container-logo">
          <Logo
            src={"../../../../public/assets/default-monochrome-black.svg"}
            alt={"Logo"}
            style={{ height: "70%" }}
          />
        </div>
        <div className="ms-navbar__container-nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href={"#!"} className="nav__link">
                <Icon iconName={"person"} iconPos={"left"}>
                  {"Login"}
                </Icon>
              </Link>
            </li>
            <li className="nav__item">
              <MiniBasket />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  classes: PropTypes.string,
};

export default Navbar;
