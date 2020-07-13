import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Icon.scss";

const Icon = ({
  iconPos = "",
  iconName = "",
  classes = "",
  style = {},
  children,
  ...props
}) => {
  const attributes = {
    "data-testid": "ms-icon",
    className: classnames("ms-icon", `material-icons ${iconPos} ${classes}`),
    style: style,
    ...props,
  };

  return (
    <>
      <i {...attributes}>{iconName}</i>
      {children}
    </>
  );
};

Icon.propTypes = {
  iconPos: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  classes: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Icon;
