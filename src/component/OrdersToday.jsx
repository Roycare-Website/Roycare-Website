import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const inventoryData = [
  { product: "Baby Lotion", stock: 18, ordersToday: 2 },
  { product: "Baby Wipes", stock: 24, ordersToday: 1 },
  { product: "Shampoo", stock: 12, ordersToday: 3 },
]

// Sample hourly order data for today
const orderTrendData = [
  { hour: "8am", orders: 1 },
  { hour: "10am", orders: 2 },
  { hour: "12pm", orders: 0 },
  { hour: "2pm", orders: 1 },
  { hour: "4pm", orders: 2 },
  { hour: "6pm", orders: 0 },
]

const OrdersToday = () => {
  const totalOrdersToday = inventoryData.reduce((sum, item) => sum + item.ordersToday, 0)

  return (
    <div className="bg-white p-5 rounded-lg shadow-md space-y-6">
      <h2 className="text-lg font-semibold">Orders Summary</h2>

      <div>
        <p className="text-sm text-gray-600">Total Orders Today</p>
        <p className="text-2xl font-bold text-teal-600">{totalOrdersToday}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Orders Today</th>
              <th className="px-4 py-2">Inventory Left</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.product}</td>
                <td className="px-4 py-2">{item.ordersToday}</td>
                <td className="px-4 py-2">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Line Graph */}
      <div className="h-64">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Order Trends Today</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={orderTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#14b8a6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OrdersToday
