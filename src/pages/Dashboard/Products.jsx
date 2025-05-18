import React from "react";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    title: "Fragrance-Free Body Lotion",
    category: "Cream",
    price: "GHS 120.00",
    image: "/assets/images/sample-product.png",
  },
  {
    id: 2,
    title: "Organic Baby Shampoo",
    category: "Shampoo",
    price: "GHS 90.00",
    image: "/assets/images/sample-product.png",
  },
  {
    id: 3,
    title: "Natural Baby Detergent",
    category: "Detergent",
    price: "GHS 80.00",
    image: "/assets/images/sample-product.png",
  },
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-contain bg-gray-50"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="font-bold text-green-600">{product.price}</p>
              <div className="flex gap-2 mt-3">
                <Link
                  to={`/dashboard/updateproduct`}
                  className="w-full bg-blue-500 text-white text-sm px-3 py-2 rounded hover:bg-blue-600 transition"
                >
                  Edit
                </Link>

                <button className="w-full bg-red-500 text-white text-sm px-3 py-2 rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
