import React from "react";

import TabBar from "./TabBar";
import Image from "material-ui-image";
import banner from "../../temp_files/banner.png";

const Header = () => {
  return (
    <div>
      <Image src={banner} aspectRatio="5/1" />
      <TabBar />
    </div>
  );
};

export default Header;
