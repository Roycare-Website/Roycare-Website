import React from "react";
import { Link } from "react-router";
import Product3 from "../assets/images/product3.png"

const Shop = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <div className="min-h-[70vh] bg-[url(assets/images/baby.png)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold pb-4">
            Products List
          </h1>
          <p className="text-white text-2xl md:text-xl font-normal mb-3">
            Purity, safety, and sustainability are not marketing words; they are
            our promises
          </p>
        </div>
      </div>

 {/* Currency Button */}
 <div className="flex mb-4 bg-black">
      <select className="border px-4 py-2 rounded-md text-sm text-blue-300 shadow-sm">
        <option value="GHS">GHS (₵)</option>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
      </select>
    </div>
      {/* ✅ Search & Filter UI (Static) */}
      <div className="flex items-center gap-4 mt-4 justify-center">
        <form className="flex flex-wrap items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <select className="h-10 px-4 border rounded-md text-gray-700 text-sm">
            <option value="">All Categories</option>
            <option value="category">Category</option>
            <option value="title">Title</option>
            <option value="gte">Price greater than</option>
            <option value="lte">Price less than</option>
          </select>

          <input
            type="text"
            placeholder="Enter keyword or price"
            className="h-10 w-full sm:w-80 md:w-96 lg:w-[400px] px-4 border rounded-md outline-none text-gray-700 text-sm"
          />

          <button
            type="submit"
            className="h-10 bg-[#4A7807] text-white px-6 rounded-md hover:bg-blue-600 transition shadow-md flex items-center"
          >
            Search
          </button>
        </form>
      </div>

     <div className=" flex">
     <div className="max-w-7xl mx-auto p-4 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white flex flex-col items-center text-center p-2">
            {/* Image */}
            <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
              <img
                src={Product3}
                alt="Sample Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Ratings (stars) */}
            <div className="flex space-x-1 mt-4 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-2">Cream</p>

            {/* Product Title */}
            <h2 className="text-lg font-semibold mt-1">Fragrance-Free Body Lotion</h2>

            {/* Price Range */}
            <p className="text-gray-700 font-medium mt-1">$15.00 – $25.00</p>

            {/* View Button */}
            <Link to="/shop/1">
              <button className="mt-4 w-full bg-[#4A7807] text-white p-2 rounded-md hover:bg-[#3b6405] transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white flex flex-col items-center text-center p-2">
            {/* Image */}
            <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
              <img
                src={Product3}
                alt="Sample Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Ratings (stars) */}
            <div className="flex space-x-1 mt-4 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-2">Cream</p>

            {/* Product Title */}
            <h2 className="text-lg font-semibold mt-1">Fragrance-Free Body Lotion</h2>

            {/* Price Range */}
            <p className="text-gray-700 font-medium mt-1">$15.00 – $25.00</p>

            {/* View Button */}
            <Link to="/shop/1">
              <button className="mt-4 w-full bg-[#4A7807] text-white p-2 rounded-md hover:bg-[#3b6405] transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white flex flex-col items-center text-center p-2">
            {/* Image */}
            <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
              <img
                src={Product3}
                alt="Sample Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Ratings (stars) */}
            <div className="flex space-x-1 mt-4 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-2">Cream</p>

            {/* Product Title */}
            <h2 className="text-lg font-semibold mt-1">Fragrance-Free Body Lotion</h2>

            {/* Price Range */}
            <p className="text-gray-700 font-medium mt-1">$15.00 – $25.00</p>

            {/* View Button */}
            <Link to="/shop/1">
              <button className="mt-4 w-full bg-[#4A7807] text-white p-2 rounded-md hover:bg-[#3b6405] transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
     </div>

      


    </div>
  );
};

export default Shop;
