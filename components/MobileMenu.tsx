import React from "react";
import MobileMenuItem from "./MobileMenuItem";
import navItem from "../data/navbarItem";
const MobileMenu = () => {
  return (
    <div className="bg-black/80 w-56 absolute top-8 left-0 flex-col border-gray-500 border-t-2">
      <div className="flex flex-col">
        {navItem.map((item, idx) => (
          <div key={idx} className="px-3 py-3 text-center text-white hover:bg-gray-700/50 hover:underline">
            <MobileMenuItem key={idx} label={item.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
