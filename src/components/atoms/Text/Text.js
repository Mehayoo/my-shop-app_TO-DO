import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Text.scss";

const Text = ({ as = "p", classes = "", style = {}, children, ...props }) => {
  const attributes = {
    "data-testid": "ms-text",
    className: classnames("ms-text", classes),
    style: style,
    ...props,
  };
  const Component = as;
  return <Component {...attributes}>{children}</Component>;
};

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  classes: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Text;
