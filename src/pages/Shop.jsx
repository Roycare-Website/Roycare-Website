import React from "react";
import { Link } from "react-router";

const Shop = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <div className="min-h-[70vh] bg-[url(assets/images/baby.png)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-black font-bold pb-4">
            Products List
          </h1>
          <p className="text-black text-2xl md:text-xl font-normal mb-3">
            Purity, safety, and sustainability are not marketing words; they are
            our promises
          </p>
        </div>
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

      {/* ✅ Product Display (Static Sample Cards) */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-1 justify-center items-center">
            <div className="w-[150px] h-40 bg-gray-200 rounded-md overflow-hidden">
              <img
                src="assets/images/sample-product.png"
                alt="Sample Product"
                className="w-full h-full object-cover"
              />
            </div>
            <h4>Category Name</h4>
            <h2 className="text-lg font-semibold mt-2">Sample Product Title</h2>
            <p className="text-gray-600 text-sm">
              Short product description...
            </p>
            <p className="text-[#4A7807] font-bold mt-2">GHS 100.00</p>
            <Link to="/shop/1">
              <button className="mt-3 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>

          {/* Duplicate this block to show more static products */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
