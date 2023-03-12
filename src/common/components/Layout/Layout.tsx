import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import LogoSvg from "src/utils/svgs/LogoSvg";
import DarkThemeIcon from "src/utils/svgs/DarkThemeIcon";
import LightThemeIcon from "src/utils/svgs/LightTheme";
import cx from "classnames";
import NavMenuCloseIcon from "src/utils/svgs/NavMenuCloseIcon";
import NavMenuOpenIcon from "src/utils/svgs/NavMenuOpenIcon";
import Footer from "./footer/Footer";
import DarkThemeLogo from "src/utils/svgs/DarkThemeLogo";

const dropdownStyles = [
  "absolute",
  "flex flex-col justify-center items-start sm:pl-[46px] xs:pl-[36px]",
  "top-20 shadow-lg shadow-gray-300 dark:shadow-md dark:shadow-black",
  "right-0",
  "w-full sm:w-[375px] xs:w-[345px] h-[365px] gap-y-4 pt-2 pb-4  bg-white dark:bg-[#231F20] z-50",
];

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li
    className={
      "mt-0 text-[16px] text-[#171717] dark:text-white  sm:text-sm sm:font-semibold md:text-base"
    }
  >
    {children}
  </li>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="xl:max-w-8xl max-w-full xs:px-3 sm:px-5 md:px-2">
        <nav className=" sticky -top-1 z-1500 h-[80px] bg-white dark:bg-[#121212] sm:mx-[0px] md:mx-[30px] md:px-4 xl:mt-[30px]">
          <div className="justify-between xl:flex xl:items-center xl:justify-center">
            <div className="flex w-full items-center justify-between ">
              <a href="#" className="dark:hidden">
                <LogoSvg />
              </a>
              <a href="#" className="invisible dark:visible">
                <DarkThemeLogo />
              </a>
              <div className="flex items-center justify-center">
                <div className="lg:hidden">
                  <button
                    className="h-[50px] w-[50px] rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                    onClick={() => setNavMenuOpen(!navMenuOpen)}
                  >
                    {navMenuOpen ? <NavMenuCloseIcon /> : <NavMenuOpenIcon />}
                  </button>
                </div>
                <ul
                  className={cx(
                    {
                      [dropdownStyles.join(" ")]: navMenuOpen,
                      hidden: !navMenuOpen,
                    },
                    "justify-start text-base font-medium lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent lg:shadow-none dark:lg:bg-transparent dark:lg:shadow-none"
                  )}
                >
                  <ListItem>
                    <Link href="#HowItWorks" className="">
                      How it works
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#WhyUs" className="">
                      Why us
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#PricingPlans" className="">
                      Pricing plans
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#chooseUs" className="">
                      FAQ’s
                    </Link>
                  </ListItem>

                  <li className="flex h-[48px] w-[150px] items-center justify-center rounded bg-[#1E3ED5] ">
                    <Link
                      href="#SignUp"
                      className="text-[16px] font-semibold leading-[18px] text-[#FFFFFF]"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <ListItem>
                    <Link href="#Login" className="h-[26px] w-[108px]">
                      Log in
                    </Link>
                  </ListItem>
                  {/* Next Js theme  */}
                  <div className="flex hidden flex-col justify-center lg:block">
                    <button
                      className="h-[40px] w-auto w-[35px]"
                      onClick={() =>
                        setTheme(currentTheme === "light" ? "dark" : "light")
                      }
                    >
                      {currentTheme === "dark" ? (
                        <DarkThemeIcon />
                      ) : (
                        <LightThemeIcon />
                      )}
                    </button>
                  </div>
                </ul>
                <div className="flex flex-col justify-center lg:hidden">
                  <button
                    className="h-[34px] w-[34px]"
                    onClick={() =>
                      setTheme(currentTheme === "light" ? "dark" : "light")
                    }
                  >
                    {currentTheme === "dark" ? (
                      <DarkThemeIcon />
                    ) : (
                      <LightThemeIcon />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
