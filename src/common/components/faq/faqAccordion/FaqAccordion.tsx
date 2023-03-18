import { faqContentDescription } from "@content/faqContentDescription/FaqContentDescription";
import React, { useState } from "react";

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
    <div>
      {faqContentDescription.map((faq: FaqItem, index: number) => (
        <div key={faq.id}>
          <button
            className="flex w-full justify-between rounded-md bg-white p-4 text-left font-medium hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            onClick={() => handleAccordionClick(index)}
          >
            <span>{faq.title}</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180 transform" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.707a1 1 0 0 1 0 1.414L2.414 12a1 1 0 1 1-1.414-1.414l4.853-4.853a1 1 0 0 1 1.414 0zM17.707 12a1 1 0 0 1 0 1.414l-4.853 4.853a1 1 0 0 1-1.414-1.414L15.586 12a1 1 0 0 1 1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              activeIndex === index ? "block" : "hidden"
            } rounded-b-md bg-white p-4`}
          >
            <p className="text-gray-700">{faq.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
