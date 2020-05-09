import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Image.scss";

const Image = ({
  src = "",
  alt = "Image Missing",
  classes = "",
  style = {},
  ...props
}) => {
  const attributes = {
    "data-testid": "ms-image",
    src,
    alt,
    className: classnames("ms-image", classes),
    style,
    ...props,
  };
  return <img {...attributes} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.string,
  style: PropTypes.shape({}), //used because we are describing an object whose keys are known ahead of time(like width, height, align), and may represent different types(number, string, etc).
};

export default Image;
