import React from "react";
import { FaSearch, FaKeyboard, FaEnvelope, FaBell } from "react-icons/fa";

const DashNavbar = () => {
  return (
    <div className="w-full bg-white shadow px-6 py-3 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-sm text-gray-700"
        />
        <span className="ml-2 text-gray-500 text-sm hidden sm:inline-flex">
          ⌘ K
        </span>
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center gap-6 ml-4">
        <FaEnvelope className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <FaBell className="text-gray-500 cursor-pointer hover:text-gray-700" />

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-semibold">Tynisha Obey</p>
            <p className="text-xs text-gray-500">Mailstore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
