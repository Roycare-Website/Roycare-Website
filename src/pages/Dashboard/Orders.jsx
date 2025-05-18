import React, { useState } from 'react';

const orders = [
  {
    id: '#ORD001',
    customer: 'Ama Boateng',
    product: 'Fragrance-Free Lotion',
    price: 'GHS 120.00',
    date: '2025-05-12',
    status: 'Delivered',
  },
  {
    id: '#ORD002',
    customer: 'Kwame Mensah',
    product: 'Organic Baby Shampoo',
    price: 'GHS 75.00',
    date: '2025-05-11',
    status: 'Pending',
  },
  {
    id: '#ORD003',
    customer: 'Efua Asantewaa',
    product: 'Baby Detergent',
    price: 'GHS 90.00',
    date: '2025-05-10',
    status: 'Cancelled',
  },
  // Adding more sample orders to demonstrate pagination
  {
    id: '#ORD004',
    customer: 'Kofi Annan',
    product: 'Baby Wipes (Pack of 100)',
    price: 'GHS 45.00',
    date: '2025-05-09',
    status: 'Delivered',
  },
  {
    id: '#ORD005',
    customer: 'Abena Pokuaa',
    product: 'Diaper Rash Cream',
    price: 'GHS 65.00',
    date: '2025-05-08',
    status: 'Pending',
  },
  {
    id: '#ORD006',
    customer: 'Yaw Mensa',
    product: 'Baby Powder',
    price: 'GHS 35.00',
    date: '2025-05-07',
    status: 'Delivered',
  },
  {
    id: '#ORD007',
    customer: 'Akosua Sarpong',
    product: 'Baby Oil',
    price: 'GHS 50.00',
    date: '2025-05-06',
    status: 'Cancelled',
  },
];

const statusColor = {
  Delivered: 'text-green-600 bg-green-100',
  Pending: 'text-yellow-600 bg-yellow-100',
  Cancelled: 'text-red-600 bg-red-100',
};

const Orders = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of orders to display per page
  
  // Calculate total number of pages
  const totalItems = orders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Calculate the range of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate the range text (e.g., "1-3 of 7")
  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, totalItems);
  
  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You could also scroll to the top of the table here if needed
    // window.scrollTo({ top: tableRef.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Customer Orders</h2>
      
      {/* Top Pagination */}
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            {startItem}-{endItem} of {totalItems}
          </span>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-1 rounded ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
            aria-label="Previous page"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-1 rounded ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
            aria-label="Next page"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Bottom Pagination */}
      <div className="flex items-center justify-end mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            {startItem}-{endItem} of {totalItems}
          </span>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-1 rounded ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
            aria-label="Previous page"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-1 rounded ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"}`}
            aria-label="Next page"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;