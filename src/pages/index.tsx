import HeroSection from "@components/HeroSection/HeroSection";
import { HowItWorks } from "@components/HowItWorks/HowItWorks";
import PricingPlans from "@components/PricingPlans/PricingPlans";
import WhyUs from "@components/WhyUs/WhyUs";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className=" overflow-hidden px-0">
        <Fragment>
          <HeroSection />
          <HowItWorks />
          <WhyUs />
          <PricingPlans />
        </Fragment>
      </div>
    </>
  );
}
