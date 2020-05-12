import React, { useContext, useEffect } from "react";
import { Image } from "../../index";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ classes = "", ...props }) => {
  const { images } = props;

  return (
    <div className={classnames("ms-banner", classes)}>
      <Image
        src={images[1].imageSrc}
        alt={images[1].imageAlt}
        classes="ms-banner__image"
      />
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.string,
};

export default Banner;
