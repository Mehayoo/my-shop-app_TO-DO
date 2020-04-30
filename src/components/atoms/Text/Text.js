import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Text.scss";

const Text = ({ classes = "", style = {}, children, ...props }) => {
  const attributes = {
    "data-testid": "ms-text",
    className: classnames("ms-text", classes),
    style: style,
    ...props,
  };
  return <div {...attributes}>{children}</div>;
};

Text.propTypes = {
  classes: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Text;
