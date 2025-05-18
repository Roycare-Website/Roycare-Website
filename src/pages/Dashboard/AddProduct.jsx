import React from 'react'

const AddProduct = () => {
  return (
    <div className="w-[80%] mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>
    <form action="#" method="post" encType="multipart/form-data" className="space-y-6">
      
      {/* Product Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A7807]"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A7807]"
          required
        ></textarea>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          id="category"
          name="category"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A7807]"
          required
        >
          <option value="">Select Category</option>
          <option value="cream">Cream</option>
          <option value="shampoo">Shampoo</option>
          <option value="detergent">Detergent</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (GHS)</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A7807]"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4A7807] file:text-white hover:file:bg-[#3b6405]"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#4A7807] text-white py-2 px-4 rounded-md hover:bg-[#3b6405] transition"
        >
          Add Product
        </button>
      </div>

    </form>
  </div>
  )
}

export default AddProduct