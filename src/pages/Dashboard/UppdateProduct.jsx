import React from 'react';

const UpdateProduct = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#4A7807]">Update Product</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Price</label>
          <input
            type="text"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Old Price (Optional) */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Old Price</label>
          <input
            type="text"
            placeholder="Enter old price"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-sm text-gray-700">Product Image</label>
          <input
            type="file"
            className="w-full px-2 py-2 border rounded-md text-sm"
          />
        </div>

        {/* Description (Full Width) */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-sm text-gray-700">Description</label>
          <textarea
            rows="4"
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-md text-sm"
          ></textarea>
        </div>

        {/* Update Button (Full Width) */}
        <div className="md:col-span-2">
          <button className="w-full bg-[#4A7807] text-white py-2 rounded-md hover:bg-[#3b6405] transition">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
