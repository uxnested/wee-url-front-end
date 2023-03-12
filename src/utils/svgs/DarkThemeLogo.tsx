import Image from "next/image";
import React from "react";
import darkLogo from "../../../public/Wee-Url-white.png";

const DarkThemeLogo = () => {
  return (
    <div className="h-[68px] w-[91px]">
      <Image src={darkLogo} alt="logo" width={91} height={68} />
    </div>
  );
};

export default DarkThemeLogo;
