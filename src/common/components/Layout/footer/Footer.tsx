import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex border-t-[1px] border-[#171717] border-opacity-10 lg:mx-[54px] lg:mt-[100px] lg:h-[40px] lg:items-center lg:justify-between">
        <p className="text-base font-normal leading-[26px] text-[#1E1E1E]">
          Nestgo@2022 All rights reserved
        </p>
        <div className="flex">
          <a
            href="#"
            className="text-base font-normal leading-[26px] text-[#1E1E1E] lg:mr-[16px]"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-base font-normal leading-[26px] text-[#1E1E1E]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
