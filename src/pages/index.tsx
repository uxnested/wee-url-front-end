import HeroSection from "@components/HeroSection/HeroSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className=" overflow-hidden lg:mx-[54px]">
        <Fragment>
          <HeroSection />
        </Fragment>
      </div>
    </>
  );
}
