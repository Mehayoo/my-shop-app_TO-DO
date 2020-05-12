import React from "react";
import { Image } from "../../index";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Spinner.scss";

const Spinner = ({ classes = "" }) => {
  return (
    <div className={classnames("ms-spinner", classes)}>
      <Image src={"../../../../public/assets/spinner.gif"} alt={"Loading..."} />
    </div>
  );
};

Spinner.propTypes = {
  classes: PropTypes.string,
};

export default Spinner;
