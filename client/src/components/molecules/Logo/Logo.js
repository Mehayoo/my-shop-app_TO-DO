import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Image, Link } from "../../index";
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
