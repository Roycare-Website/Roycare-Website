import React, { useState } from "react"

const customersData = [
  {
    id: 1,
    name: "Ama Serwaa",
    email: "ama.serwaa@example.com",
    phone: "+233 24 123 4567",
    address: "Accra, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Kwame Asante",
    email: "kwame.asante@example.com",
    phone: "+233 20 456 7890",
    address: "Kumasi, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Esi Boateng",
    email: "esi.boateng@example.com",
    phone: "+233 26 345 6789",
    address: "Cape Coast, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Kojo Mensah",
    email: "kojo.mensah@example.com",
    phone: "+233 27 987 6543",
    address: "Tamale, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Akua Dapaah",
    email: "akua.dapaah@example.com",
    phone: "+233 55 888 7777",
    address: "Takoradi, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Yaw Osei",
    email: "yaw.osei@example.com",
    phone: "+233 24 112 3344",
    address: "Ho, Ghana",
    profileImage: "https://via.placeholder.com/150",
  },
]

const Customers = () => {
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(customersData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentCustomers = customersData.slice(startIndex, startIndex + itemsPerPage)

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1)
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1)

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Customer List</h2>

      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 text-left">Profile</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <img
                    src={customer.profileImage}
                    alt={customer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-800">{customer.name}</td>
                <td className="px-4 py-2 text-gray-600">{customer.email}</td>
                <td className="px-4 py-2 text-gray-600">{customer.phone}</td>
                <td className="px-4 py-2 text-gray-600">{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-gray-500">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Customers
