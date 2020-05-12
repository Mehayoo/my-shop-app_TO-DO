import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Link.scss";

const Link = ({ href = "/", classes = "", style = {}, children, ...props }) => {
  const attributes = {
    "data-testid": "ms-link",
    href: href,
    className: classnames("ms-link", classes),
    style: style,
    ...props,
  };
  return <a {...attributes}>{children}</a>;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  classes: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Link;
