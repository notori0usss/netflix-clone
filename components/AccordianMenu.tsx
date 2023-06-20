import React from "react";
import { signOut } from "next-auth/react";

const AccordianMenu = () => {
  return (
    <div className="bg-black/80 w-40 absolute top-16 right-0 flex-col border-gray-500 border-t-2">
      <div className="flex flex-col">
        <button
          onClick={() => signOut()}
          className="px-3 py-3 text-center text-white hover:bg-gray-700/50 hover:underline"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AccordianMenu;
