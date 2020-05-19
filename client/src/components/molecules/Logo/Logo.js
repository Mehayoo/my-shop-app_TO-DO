import React from "react";
import { Image, Link } from "../../index";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Logo.scss";

const Logo = ({ classes = "", src = "", alt = "", style = {} }) => {
  return (
    <div className={classnames("ms-logo", classes)}>
      <Link href={"#!"}>
        <Image src={src} alt={alt} style={style} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

export default Logo;
