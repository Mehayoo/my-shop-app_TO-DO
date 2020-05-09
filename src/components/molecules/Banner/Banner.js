import React, { useContext, useEffect } from "react";
import AssetsContext from "../../../context/assets/assetsContext";
import Spinner from "../../molecules/Spinner/Spinner";
import Image from "../../atoms/Image/Image";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ classes = "" }) => {
  const assetsContext = useContext(AssetsContext);
  const { images, loading, getImages } = assetsContext;

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, []);

  //"../../../../public/assets/cover.png"

  return (
    <div className={classnames("ms-banner", classes)}>
      {images.length && !loading ? (
        <Image
          src={images[1].imageSrc}
          alt={images[1].imageAlt}
          classes="ms-banner__image"
        />
      ) : (
        <Spinner src="../../../../public/assets/spinner.gif" alt="Loading..." />
      )}
    </div>
  );
};

Banner.propTypes = {
  classes: PropTypes.string,
};

export default Banner;
