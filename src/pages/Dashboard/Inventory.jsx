import React, { useState } from "react";

const initialInventory = [
  { id: 1, name: "Organic Baby Lotion", category: "Skincare", price: 35, stock: 12 },
  { id: 2, name: "Baby Shampoo", category: "Haircare", price: 28, stock: 20 },
  { id: 3, name: "Natural Baby Oil", category: "Oils", price: 30, stock: 8 },
  { id: 4, name: "Baby Powder", category: "Bodycare", price: 22, stock: 15 },
  { id: 5, name: "Baby Detergent", category: "Laundry", price: 25, stock: 18 },
  { id: 6, name: "Baby Wipes", category: "Hygiene", price: 12, stock: 30 },
  { id: 7, name: "Baby Wash", category: "Hygiene", price: 15, stock: 14 },
  { id: 8, name: "Natural Balm", category: "Skincare", price: 40, stock: 9 },
  { id: 9, name: "Herbal Teething Gel", category: "Health", price: 19, stock: 10 },
  { id: 10, name: "Baby Conditioner", category: "Haircare", price: 26, stock: 17 },
];

const Inventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  const handleRestock = (id) => {
    setInventory(prev =>
      prev.map(item =>
        item.id === id ? { ...item, stock: item.stock + 10 } : item
      )
    );
  };

  const handleEdit = (id) => {
    alert("Edit functionality coming soon!");
  };

  // Pagination Logic
  const totalPages = Math.ceil(inventory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = inventory.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Inventory Management</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-white uppercase bg-green-700">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price (GHS)</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">GHS {item.price}</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
                    onClick={() => handleRestock(item.id)}
                  >
                    Restock
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-xs"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No products in inventory.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </p>
        <div className="space-x-2">
          <button
            className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400 disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400 disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
