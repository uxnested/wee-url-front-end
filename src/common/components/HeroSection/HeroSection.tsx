import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../../../../public/Image/heroImage.png";

function HeroSection() {
  return (
    <>
      <div className="mt-[70px] flex  lg:justify-center lg:justify-between lg:text-start">
        <div className="mt-[70px] flex text-start lg:flex-col">
          <h1 className="text-[#171717] lg:text-[52px] lg:font-bold lg:leading-[70px]">
            Shorten links <br /> Using WeeURL{" "}
          </h1>
          <p className="my-[10px] text-[#171717] lg:w-[479px] lg:text-lg lg:font-normal lg:leading-[30px]">
            With WeeUrl, you can automate your work and have more time for what
            matters most - no code required!
          </p>
          <div className="mt-[18px] flex">
            <li className="flex h-[48px] w-[150px] items-center justify-center rounded bg-[#1E3ED5] ">
              <Link
                href="#SignUp"
                className="text-[16px] font-semibold leading-[18px] text-[#FFFFFF]"
              >
                Sign Up
              </Link>
            </li>
            <button className="mx-[20px] h-[48px] w-[150px] rounded border border-[#1E3ED5] bg-transparent py-2 px-4 text-base font-semibold font-semibold leading-[18px] text-[#1E3ED5]">
              Pricing
            </button>
          </div>
        </div>
        <div className="lg:h-[621px] lg:w-[645px]">
          <Image
            src={HeroImage}
            alt="Hero Image "
            className="lg:h-[621px] lg:w-[645px]"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
