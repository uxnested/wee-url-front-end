import React from "react";
import LighLogo from "../../../public/Wee-Url-blue.png";
import Image from "next/image";
const LogoSvg = () => {
  return (
    <div className="h-[68px] w-[91px]">
      <Image src={LighLogo} alt="logo" width={91} height={68} />
    </div>
  );
};

export default LogoSvg;
