// import React, { useContext, useEffect } from "react";
// import AssetsContext from "../../../context/assets/assetsContext";
// import {
//   Image,
//   Link,
//   Text,
//   Preloader,
//   NewsletterForm,
//   SocialMediaBar,
// } from "../../index";
// import "./Footer.scss";

// const Footer = () => {
//   const assetsContext = useContext(AssetsContext);
//   const { icons, getIcons, iconss, getIconss, loading } = assetsContext;

//   useEffect(() => {
//     //getIcons();
//     getIconss();
//     // eslint-disable-next-line
//   }, []);

//   console.log("iconss in FOOTER: ", iconss);

//   return (
//     <footer className="ms-footer">
//       {iconss.length && !loading ? (
//         <>
//           <div className="ms-footer__newsletter">
//             <NewsletterForm />
//           </div>
//           <div className="ms-footer__socialMedia">
//             <SocialMediaBar icons={iconss.socialMediaIcons} />
//           </div>
//           <div className="ms-footer__copyright">
//             <Text as={"p"} style={{ fontWeight: "600", color: "white" }}>
//               Copyright 2020 &copy; Mihaiu Sorin-Ionut - MyShopApp
//             </Text>
//           </div>
//         </>
//       ) : (
//         <Preloader />
//       )}
//     </footer>
//   );
// };

// export default Footer;

import React, { useContext, useEffect } from "react";
import AssetsContext from "../../../context/assets/assetsContext";
import { Text, Preloader, NewsletterForm, SocialMediaBar } from "../../index";
import "./Footer.scss";

const Footer = () => {
  const assetsContext = useContext(AssetsContext);
  const { assets, getAssets, loading } = assetsContext;

  useEffect(() => {
    getAssets();
    // eslint-disable-next-line
  }, []);

  console.log("icons in FOOTER: ", assets);

  return (
    <footer className="ms-footer">
      {assets && Object.keys(assets).length && !loading ? (
        <>
          <div className="ms-footer__newsletter">
            <NewsletterForm />
          </div>
          <div className="ms-footer__socialMedia">
            <SocialMediaBar icons={assets.socialMediaIcons} />
          </div>
          <div className="ms-footer__copyright">
            <Text as={"p"} style={{ fontWeight: "600", color: "white" }}>
              Copyright 2020 &copy; Mihaiu Sorin-Ionut - MyShopApp
            </Text>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </footer>
  );
};

export default Footer;
