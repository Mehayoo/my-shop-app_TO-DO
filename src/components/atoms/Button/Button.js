import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Button.scss";

const Button = ({
  as = "button",
  classes = "",
  iconPos = "",
  iconName = "",
  name = "",
  style = {},
  func = () => {},
  ...props
}) => {
  const Component = as;
  const attributes = {
    "data-testid": "ms-button",
    className: classnames("ms-button", classes),
    onClick: func,
    ...props,
  };
  return (
    <Component {...attributes}>
      <i className={classnames(`material-icons ${iconPos}`)}>{iconName}</i>
      {name}
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.string,
  classes: PropTypes.string,
  iconPos: PropTypes.string,
  iconName: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.shape({}),
  func: PropTypes.func.isRequired,
};

export default Button;
