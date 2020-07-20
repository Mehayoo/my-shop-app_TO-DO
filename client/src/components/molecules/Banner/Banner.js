import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Image } from "../../index";
import "./Banner.scss";

const Banner = ({ classes = "" }) => {
  return (
    <div className={classnames("ms-banner", classes)}>
      <Image
        src={"../../../../public/assets/minimalism-art-notebook-01.jpg"}
        alt={"Banner"}
        classes="ms-banner__image"
      />
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.string,
};

export default Banner;
