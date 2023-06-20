import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsChevronUp, BsSearch, BsBellFill } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import navItem from "../data/navbarItem";
import AccordianMenu from "./AccordianMenu";
const TOP_OFFSET: number = 66;
const Navbar = () => {
  const [transparent, setTransparent] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccordianMenu, setShowAccordianMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full fixed top-0 z-40 text-white flex justify-between items-center lg:px-20 py-3 duration-600 transition ${
        transparent ? "bg-black/0" : "bg-black/100"
      }`}
    >
      <div className="px-4 md:px-16 py-4 flex flex-row items-center transition duration-500">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {navItem.map((item, idx) => (
            <NavbarItem key={idx} label={item.label} />
          ))}
        </div>
        <div
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronUp
            className={`text-white transition-all duration-400 ${
              showMobileMenu ? "rotate-0" : "rotate-180"
            }`}
          />
          {showMobileMenu && (
            <>
              <MobileMenu />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <BsSearch className="cursor-pointer hover:text-white text-gray-200 text-xl" />
        <div className="relative flex">
          <BsBellFill className="cursor-pointer hover:text-white text-gray-200 text-xl" />
          <span className="absolute left-3.5 -top-2 text-xs bg-red-500 px-1 rounded-full">
            2
          </span>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer relative"
          onClick={() => setShowAccordianMenu(!showAccordianMenu)}
        >
          <div className="w-8 h-8 rounded lg:w-10 lg:h-10 overflow-hidden">
            <img src="/images/default-red.png" alt="" />
          </div>
          <BsChevronUp
            className={`text-white transition-all duration-400 ${
              showAccordianMenu ? "rotate-0" : "rotate-180"
            }`}
          />

          {showAccordianMenu && <AccordianMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
