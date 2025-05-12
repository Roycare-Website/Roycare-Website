import React from "react";
import { ArrowRight, ChevronUp, Instagram, Linkedin, Search, Youtube, } from "lucide-react";
import { Facebook } from "lucide-react";
import { FaSnapchatGhost, FaTiktok } from "react-icons/fa";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[url(assets/images/)] bg-no-repeat bg-cover bg-white opacity-96 text-black w-screen min-h-50">
      <div className="w-full flex flex-row justify-around p-20  ">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Roycare</h1>
          <p className="font-light">
            AFB Golden Enterprise is a pioneering natural cosmetics company <br />
            based in Oyarifa Accra, Ghana.  Roycare is our premium baby <br />
            care brand, born from our deep commitment to providing the safest,<br />
            most natural care for delicate baby skin, hair, and daily
            needs.
          </p>
        </div>
        <div className="flex flex-col space-y-4 pl-5 ">
          <h1 className="text-2xl font-bold">Navigations</h1>
          <ul className="space-y-4 font-light">
            <li className="cursor-pointer hover:text-blue-300">About Us</li>
            <li className="cursor-pointer hover:text-blue-300">Shop</li>
            <li className="cursor-pointer hover:text-blue-300">Testinomials</li>
            <li className="cursor-pointer hover:text-blue-300">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 pl-5">
        <h1 className="text-2xl font-bold">Follow Us</h1>
         <a href="https://web.facebook.com/people/Roy-Car/pfbid035RSFepXsUYh599f6cwdGACwpo28u7nD6A7J8hczQ" target="_blank" rel="noopener noreferrer" className="flex space-x-2" >
            <Facebook className="cursor-pointer hover:text-[#466C00] font-light" /> 
            <p> Facebook</p>
          </a>
        
          <a href="https://www.youtube.com/@Roycare360" target="_blank" rel="noopener noreferrer" className="flex space-x-2" >
            <Youtube className="cursor-pointer hover:text-[#466C00] font-light" />
            <p> Youtube</p>
          </a>
        
          <a href="https://www.instagram.com/roycare360/" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <Instagram className="cursor-pointer hover:text-[#466C00] font-light"  />
            <p> Instagram</p>
          </a>

          <a href="https://www.linkedin.com/in/roycare-659009365/" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <Linkedin className="cursor-pointer hover:text-[#466C00] font-light" />
            <p> LinkedIn</p>
          </a>

         <a href="https://www.snapchat.com/add/roycare360" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <FaSnapchatGhost className="text-2xl cursor-pointer hover:text-[#466C00]" />
            <p> SnapChat</p>
          </a>
          
         <a href="https://www.tiktok.com/@roycare" target="_blank" rel="noopener noreferrer" className="flex space-x-2">
            <FaTiktok className="text-2xl cursor-pointer hover:text-[#466C00]" />
            <p> TikTok</p>
          </a>
        </div>
        <div className="w-80 max-w-md mx-auto">
          <form action="/search" method="GET" className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              name="query"
              placeholder="Search products..."
              className="w-full px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#466C00] text-white px-4 py-2 hover:bg-[#365200] transition-colors"
            >
              Search
            </button>
          </form>
        </div>
        </div>

       

      {/* Bottom Footer */}
      <div className="border-t border-black py-4 px-4 relative pt-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2023 AMIY, Wedesign Tech.
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 bg-[#063f27] text-white p-2 rounded"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
}
