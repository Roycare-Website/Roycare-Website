import React from "react"

import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calendar,
  Activity,
  ArrowUp,
} from "lucide-react"

const Overview = () => {
  const weeklySalesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 1800 },
    { day: "Wed", sales: 1400 },
    { day: "Thu", sales: 2200 },
    { day: "Fri", sales: 2600 },
    { day: "Sat", sales: 1900 },
    { day: "Sun", sales: 1300 },
  ]

  const weeklyOrdersData = [
    { day: "Mon", orders: 18 },
    { day: "Tue", orders: 25 },
    { day: "Wed", orders: 20 },
    { day: "Thu", orders: 30 },
    { day: "Fri", orders: 35 },
    { day: "Sat", orders: 28 },
    { day: "Sun", orders: 22 },
  ]

  const productCategoryData = [
    { category: "SkinCare", percentage: 35 },
    { category: "Bath & Body", percentage: 25 },
    { category: "Eco Diapering", percentage: 20 },
    { category: "Hair Care", percentage: 10 },
    { category: "Others", percentage: 10 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>
      <div className="flex space-x-2">
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>Custom Range</option>
        </select>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 text-sm">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Weekly Sales Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" /> Weekly Sales
              </p>
              <h3 className="text-2xl font-bold mt-2">GHS 12,480</h3>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" /> 18.2% <span className="text-gray-500 ml-1">vs last week</span>
              </p>
            </div>
            <div className="bg-teal-50 p-2 rounded-full">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 h-16 bg-gray-50 rounded relative flex items-end justify-between px-1">
            {weeklySalesData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-8">
                <div
                  className="bg-teal-500 w-5 rounded-t"
                  style={{ height: `${(item.sales / 3000) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2 text-blue-600" /> Weekly Orders
              </p>
              <h3 className="text-2xl font-bold mt-2">178</h3>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" /> 12.5% <span className="text-gray-500 ml-1">vs last week</span>
              </p>
            </div>
            <div className="bg-blue-50 p-2 rounded-full">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 h-16 bg-gray-50 rounded relative flex items-end justify-between px-1">
            {weeklyOrdersData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-8">
                <div
                  className="bg-blue-500 w-5 rounded-t"
                  style={{ height: `${(item.orders / 40) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Total Sales Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" /> Total Sales
              </p>
              <h3 className="text-2xl font-bold mt-2">GHS 248,590</h3>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" /> 8.4% <span className="text-gray-500 ml-1">vs last month</span>
              </p>
            </div>
            <div className="bg-green-50 p-2 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-xs text-gray-500">
              <p>Monthly Target</p>
              <p className="font-medium text-gray-700">GHS 300,000</p>
            </div>
            <div className="w-2/3 bg-gray-200 h-2.5 rounded-full">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "83%" }}></div>
            </div>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" /> Active Users
              </p>
              <h3 className="text-2xl font-bold mt-2">1,245</h3>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" /> 5.3% <span className="text-gray-500 ml-1">vs last month</span>
              </p>
            </div>
            <div className="bg-purple-50 p-2 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-gray-500">
            <div>
              <p className="font-medium text-gray-700">845</p>
              <p>Returning</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">400</p>
              <p>New</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">68%</p>
              <p>Retention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
