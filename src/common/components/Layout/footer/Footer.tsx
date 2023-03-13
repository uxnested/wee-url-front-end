import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[1px] w-full bg-[#E0E0E0]"></div>
      <div className=" dark:bg-[#000000]">
        <div className="flex items-center bg-[#ffffff] px-4 dark:border-gray-700 dark:bg-[#000000] xs:flex-col sm:flex-col md:mx-[30px] md:flex-row  md:justify-center md:py-[12px] lg:items-center ">
          <p className="text-base leading-6 text-[#000000] dark:text-white xs:text-[10px] xs:leading-5 sm:text-xs sm:leading-5">
            NestGo@2023 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
