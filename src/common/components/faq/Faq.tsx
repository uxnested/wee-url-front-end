import React from "react";
import FaqDescription from "./FaqDescription/FaqDescription";

export const Faq = () => {
  return (
    <>
      {" "}
      <div className="mt-[100px] lg:flex lg:flex-col lg:justify-center ">
        <div className="flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="lg:text-5xl lg:font-bold lg:leading-[64px]">
            Got Questions?{" "}
          </h2>
          <div className="mt-[29px] bg-[#1E3ED5] lg:h-[8px] lg:w-[172px]"></div>
        </div>
        <div className="flex w-fit lg:mx-[0px]  lg:mt-[80px] lg:justify-center lg:px-[0px]">
          <FaqDescription />
        </div>
      </div>
    </>
  );
};
