import Image from "next/image";
import React from "react";
import brandUrlImage from "/public/Image/IntoShortbrandedUrls.png";

const BrandedUrls = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:justify-center ">
        <div className="flex lg:mx-[0px] lg:px-[0px] lg:text-start">
          <div className="order-1 mr-0 h-[529px] w-[50%]">
            <Image src={brandUrlImage} alt="How It Works " className="w-fit" />
          </div>
          <div className="order-0 flex lg:ml-[54px] lg:mt-[120px] lg:w-[630px] lg:flex-col">
            <h2 className="text-[#171717] lg:mb-[24px] lg:text-[40px] lg:font-semibold lg:leading-[55px]">
              Into Short Branded Urls
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
    </>
  );
};

export default BrandedUrls;
