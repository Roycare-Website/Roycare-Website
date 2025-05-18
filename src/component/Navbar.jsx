import React, { useState } from "react";
import { Link } from "react-router";
import { Heart, Menu, ShoppingCart } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 ">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#163A12]">
        <Link to="/">ROYCARE</Link>
      </div>

      {/* Center Nav Links (desktop only) */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800 uppercase">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
      <Link to="/signup">Register</Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        <Heart className="w-5 h-5 cursor-pointer" />
        {/* Mobile menu icon */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 z-10 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
