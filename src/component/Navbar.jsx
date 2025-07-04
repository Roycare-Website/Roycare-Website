import React, { useState } from "react";
import { Link } from "react-router";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Logo from "../assets/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 ">
      {/* Logo */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#47603D] shadow-md">
        <Link to="/">
          <img
            src={Logo}
            alt="Roycare"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>


      {/* Center Nav Links (desktop only) */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800 uppercase">
        <Link to="/" className="hover:text-[#466C00] ">Home</Link>
        <Link to="/about" className="hover:text-[#466C00] ">About</Link>
        <Link to="/shop" className="hover:text-[#466C00] ">Shop</Link>
        <Link to="/blog" className="hover:text-[#466C00] ">Blog</Link>
        <Link to="/contact" className="hover:text-[#466C00] ">Contact</Link>
      </div>

      <div>
        <Link to="/signup" className="hover:text-[#466C00] ">Register</Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <Link to="/cart">
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#466C00]" />
        </Link>
        <Link to="/wishlist">
          <Heart className="w-5 h-5 cursor-pointer hover:text-[#466C00]" />
        </Link>
        {/* Mobile menu icon */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 z-10 md:hidden">
          <Link to="/" className="hover:text-[#466C00] ">Home</Link>
          <Link to="/about" className="hover:text-[#466C00] ">About</Link>
          <Link to="/shop" className="hover:text-[#466C00] ">Shop</Link>
          <Link to="/blog" className="hover:text-[#466C00] ">Blog</Link>
          <Link to="/contact" className="hover:text-[#466C00] ">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
