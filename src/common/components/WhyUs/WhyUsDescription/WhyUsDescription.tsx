import Image from "next/image";
import React from "react";
import AnonymousURLShortening from "src/utils/svgs/Link/AnonymousURLShortening";
import CustomizeURL from "src/utils/svgs/Link/CustomizeURL";
import DeleteURL from "src/utils/svgs/Link/DeleteURL";
import LogInSignUp from "src/utils/svgs/Link/LogInSignUp";
import PermanentURLLink from "src/utils/svgs/Link/PermanentURLLink";
import PrivateURLs from "src/utils/svgs/Link/PrivateURLs";
import PublicURLs from "src/utils/svgs/Link/PublicURLs";
import TemporaryURL from "src/utils/svgs/Link/TemporaryURL";
import URLShorten from "src/utils/svgs/Link/URLShorten";
import UserDashboard from "src/utils/svgs/Link/UserDashboard";
import { SVGProps } from "react";

interface DescriptionItemProps {
  id: number;
  image: React.ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
}
const description: DescriptionItemProps[] = [
  {
    id: 1,
    image: <URLShorten />,
    title: "Link/URL Shorten",
  },
  {
    id: 2,
    image: <AnonymousURLShortening />,
    title: "Anonymous URL Shortening",
  },
  {
    id: 3,
    image: <LogInSignUp />,
    title: "Sign Up/Log In",
  },
  {
    id: 4,
    image: <UserDashboard />,
    title: "User Dashboard/ My URLs",
  },
  {
    id: 5,
    image: <DeleteURL />,
    title: "Delete URL",
  },
  {
    id: 6,
    image: <CustomizeURL />,
    title: "Customize URL",
  },
  {
    id: 7,
    image: <PermanentURLLink />,
    title: "Permanent URL Link",
  },
  {
    id: 8,
    image: <TemporaryURL />,
    title: "Temporary URL",
  },
  {
    id: 9,
    image: <PublicURLs />,
    title: "Public URLs",
  },
  {
    id: 10,
    image: <PrivateURLs />,
    title: "Private URLs",
  },
];
const WhyUsDescription = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center lg:mx-[54px]">
        <div className="grid items-center gap-[25px] focus:text-[#1E3ED5] lg:grid-cols-6">
          {description?.map((item, index) => (
            <div
              className="flex h-[206px] w-[189px] max-w-sm flex-col items-center rounded-sm border-2 border-[#171717] bg-white shadow hover:border-[#1E3ED5] hover:text-[#1E3ED5] focus:text-[#1E3ED5] dark:border-gray-700 dark:bg-gray-800"
              key={item.id}
            >
              <a
                href="#"
                className="mb-[21px] mt-[46px] max-h-[44px] max-w-[42px] focus:text-[#1E3ED5]"
              >
                {item.image}
              </a>
              <div className="flex items-center justify-center text-center ">
                <p className=" text-lg font-bold leading-7 text-[#171717] hover:text-[#1E3ED5] dark:text-gray-400">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUsDescription;
