import React, { useContext } from "react";
import Image from "../../atoms/Image/Image";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Spinner.scss";

const Spinner = ({ classes = "", src = "", alt = "" }) => {
  return (
    <div className={classnames("ms-spinner", classes)}>
      <Image src={src} alt={alt} />
    </div>
  );
};

Spinner.propTypes = {
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Spinner;
