import React from "react";
import { PricingPlansCrad } from "./PricingPlansCrad/PricingPlansCrad";

const PricingPlans = () => {
  return (
    <>
      <div className="lg:mt-[100px] lg:flex lg:flex-col lg:justify-center ">
        <div className="flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="lg:text-5xl lg:font-bold lg:leading-[64px]">
            Pricing Plans{" "}
          </h2>
          <div className="mt-[29px] bg-[#1E3ED5] lg:h-[8px] lg:w-[172px]"></div>
        </div>
        <div className="lg:mx-[54px] lg:mt-[80px]">
          <PricingPlansCrad />
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
