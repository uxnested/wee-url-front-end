import { faqContentDescription } from "@content/faqContentDescription/FaqContentDescription";
import React, { useState } from "react";
import Addition from "src/utils/svgs/Link/Addition";
import Subtraction from "src/utils/svgs/Link/Subtraction";

type FaqItem = {
  id: number;
  title: string;
  description: string;
};

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="lg:w-full">
      {faqContentDescription.map((faq: FaqItem, index: number) => (
        <div key={faq.id}>
          <button
            className="flex w-full items-center justify-between rounded-md bg-[#F6F6F6] px-[26px] text-left text-[#171717] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none lg:h-[67px] lg:text-[22px] lg:font-normal lg:leading-[30px]"
            onClick={() => handleAccordionClick(index)}
          >
            <span>{faq.title}</span>
            {activeIndex === index ? <Subtraction /> : <Addition />}
          </button>
          <div
            className={`${
              activeIndex === index ? "block" : "hidden"
            } rounded-b-md bg-white text-[#171717] lg:px-[26px] lg:py-[21px] lg:text-lg lg:font-normal lg:leading-[30px]`}
          >
            <p className="text-gray-700">{faq.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
