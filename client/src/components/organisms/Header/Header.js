// import React, { useContext, useEffect } from "react";
// import AssetsContext from "../../../context/assets/assetsContext";
// import { Navbar, Banner, Spinner } from "../../index";
// import "./Header.scss";

// const Header = () => {
//   const assetsContext = useContext(AssetsContext);
//   const {
//     icons,
//     getIcons,
//     iconss,
//     getIconss,
//     images,
//     getImages,
//     loading,
//   } = assetsContext;

//   useEffect(() => {
//     //getImages();
//     //getIcons();
//     getIconss();
//     // eslint-disable-next-line
//   }, []);
//   //"../../../../public/assets/default-monochrome-black.svg"
//   //"../../../../public/assets/cover.png"
//   //console.log("icons in HEADER: ", icons);
//   console.log("iconss in HEADER: ", iconss);
//   //console.log("images in HEADER: ", images);

//   return (
//     <header className="ms-header">
//       {iconss.navIcons.length && images.length && !loading ? (
//         <>
//           <Navbar icons={icons.navIcons} images={images} loading={loading} />
//           <Banner images={images} />
//         </>
//       ) : (
//         <Spinner />
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useContext, useEffect } from "react";
// import AssetsContext from "../../../context/assets/assetsContext";
import { Navbar, Banner, Spinner } from "../../index";
import "./Header.scss";

const Header = () => {
  // const assetsContext = useContext(AssetsContext);
  // const { iconss, getIconss, loading } = assetsContext;

  // useEffect(() => {
  //   getIconss();
  //   // eslint-disable-next-line
  // }, []);
  //"../../../../public/assets/default-monochrome-black.svg"
  //"../../../../public/assets/cover.png"
  //console.log("iconss in HEADER: ", iconss);

  return (
    <header className="ms-header">
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
