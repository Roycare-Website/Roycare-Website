import { Activity, ArrowUp, ShoppingCart } from 'lucide-react'
import React from 'react'

const WeeklyOrders = () => {

    const weeklyOrdersData = [
        { day: "Mon", orders: 18 },
        { day: "Tue", orders: 25 },
        { day: "Wed", orders: 20 },
        { day: "Thu", orders: 30 },
        { day: "Fri", orders: 35 },
        { day: "Sat", orders: 28 },
        { day: "Sun", orders: 22 },
      ]

  return (
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
  )
}

export default WeeklyOrders