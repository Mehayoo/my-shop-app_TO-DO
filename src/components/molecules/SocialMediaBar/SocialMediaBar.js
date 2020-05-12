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
      {icons.length && icons[1].length ? (
        <ul className="ms-socialMediaBar">
          {icons[1].map((icon) => (
            <li key={icon.id} className="ms-socialMediaBar__listItem">
              <Link href={icon.href} target="_blank">
                <Image src={icon.imageSrc} alt={icon.imageAlt} />
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
