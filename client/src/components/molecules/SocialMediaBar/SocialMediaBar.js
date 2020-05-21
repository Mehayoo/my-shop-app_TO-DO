import React from "react";
import { Image, Link, Text, Preloader } from "../../index";
import "./SocialMediaBar.scss";

const SocialMediaBar = ({ ...props }) => {
  const { icons } = props;

  return (
    <>
      <Text as={"h4"} style={{ color: "white", textAlign: "center" }}>
        Find Us On
      </Text>
      {icons && icons.length ? (
        <ul className="ms-socialMediaBar">
          {icons.map((icon) => (
            <li key={icon._id} className="ms-socialMediaBar__listItem">
              <Link href={icon.href} target="_blank">
                <Image
                  src={`http://localhost:5000${icon.src}`}
                  alt={icon.alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default SocialMediaBar;
