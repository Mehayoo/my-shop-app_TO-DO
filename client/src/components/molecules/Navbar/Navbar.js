// import React from "react";
// import { Link, Icon, Logo, MiniBasket } from "../../index";
// import { OverlayTrigger, Popover } from "react-bootstrap";
// import classnames from "classnames";
// import PropTypes from "prop-types";
// import "./Navbar.scss";

// const Navbar = ({ classes = "", ...props }) => {
//   const { icons, images } = props;

//   console.log("icons in NAVBAR: ", icons);
//   console.log("images in NAVBAR: ", images);

//   return (
//     <nav className={classnames("ms-navbar", classes)}>
//       <div className="ms-navbar__container">
//         <div className="ms-navbar__container-logo">
//           <Logo
//             src={images[0].imageSrc}
//             alt={images[0].imageAlt}
//             style={{ height: "70%" }}
//           />
//         </div>
//         <div className="ms-navbar__container-nav">
//           <ul className="nav__list">
//             <li className="nav__item">
//               <Link href={"#!"} className="nav__link">
//                 <Icon iconName={"person"} iconPos={"left"}>
//                   {"Login"}
//                 </Icon>
//               </Link>
//             </li>
//             <li className="nav__item">
//               <MiniBasket />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   classes: PropTypes.string,
// };

// export default Navbar;

import React from "react";
import { Link, Icon, Logo, MiniBasket } from "../../index";
import { OverlayTrigger, Popover } from "react-bootstrap";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Navbar.scss";

const Navbar = ({ classes = "", ...props }) => {
  // const { icons } = props;

  // console.log("icons in NAVBAR: ", icons);

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
