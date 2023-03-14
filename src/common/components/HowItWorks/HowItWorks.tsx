import Image from "next/image";
import React from "react";
import transform from "/public/Image/transformlengthyurl.png";
import BrandedUrls from "./BrandedUrls/BrandedUrls";

export const HowItWorks = () => {
  return (
    <>
      {/* Transform Lengthy Urls */}
      <div className="mt-[100px] lg:flex lg:flex-col lg:justify-center ">
        <div className="flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="lg:text-5xl lg:font-bold lg:leading-[64px]">
            How It Works{" "}
          </h2>
          <div className="mt-[29px] bg-[#1E3ED5] lg:h-[8px] lg:w-[172px]"></div>
        </div>
        <div className="flex lg:mx-[0px] lg:mt-[80px]  lg:px-[0px] lg:text-start">
          <div className="h-[529px] w-[653px]">
            <Image
              src={transform}
              alt="How It Works "
              width={653}
              height={529}
            />
          </div>
          <div className="flex lg:ml-[39px] lg:mt-[120px] lg:w-[630px] lg:flex-col">
            <h2 className="text-[#171717] lg:mb-[24px] lg:text-[40px] lg:font-semibold lg:leading-[55px]">
              Transform Lengthy Urls
            </h2>
            <p className="text-[#171717] lg:text-base lg:font-normal lg:leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Tellus ac sem elit magna
              etiam leo ac. Eget consequat eget sit feugiat adipiscing. Sit sed
              nisl sed sit. Facilisi varius turpis facilisis neque augue
              iaculis. Ultrices netus auctor dis velit id. Imperdiet velit
              posuere in egestas pellentesa. Tincidunt libero arcu neque nulla
              habitasse erat massa.Urna integer in vulputate netus pulvinar.
              Rhoncus augue nunc nullam pretium nullam. In habitant at diam enim
              elementum lacus sed. Sagittis.
            </p>
          </div>
        </div>
      </div>
      {/* Into Short Branded Urls */}
      <BrandedUrls />
    </>
  );
};
