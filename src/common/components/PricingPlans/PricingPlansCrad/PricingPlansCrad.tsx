import { PricingPlansCardDescription } from "@content/PricingPlansCardDescription/PricingPlansCardDescription";
import React from "react";

export const PricingPlansCrad = () => {
  return (
    <>
      <div className="grid items-center gap-x-[23px] focus:text-[#1E3ED5] lg:grid-cols-3">
        {PricingPlansCardDescription?.map((item, id) => (
          <>
            <div className="flex" key={id}>
              <div className="flex flex-col items-center rounded-lg border-[#171717] bg-white p-4 shadow-lg hover:border-[#1E3ED5] lg:h-[451px] lg:w-[386px] lg:border-2">
                <h3 className="my-[24px] text-xl text-[24px] font-semibold leading-[34px] text-[#000000]">
                  {item.title}
                </h3>
                <div className="h-[1px] w-[131px] bg-[#171717]"></div>
                <p className="my-[24px] w-[262px] text-center text-lg font-normal leading-[30px] text-[#171717]">
                  {item.description}
                </p>
                <span className="my-[24px] text-[40px] font-semibold leading-[50px] text-[#000000]">
                  {item.Price}
                </span>
                <button className="h-[48px] w-[229px] rounded-sm bg-[#1E3ED5] font-semibold leading-[18px] text-[#FFFFFF]">
                  {item.button}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
