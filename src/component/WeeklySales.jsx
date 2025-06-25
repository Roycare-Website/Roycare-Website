import { ArrowUp, CalendarRange, TrendingUp } from 'lucide-react'
import React from 'react'

const WeeklySales = () => {

    const weeklySalesData = [
        { day: "Mon", sales: 1200 },
        { day: "Tue", sales: 1800 },
        { day: "Wed", sales: 1400 },
        { day: "Thu", sales: 2200 },
        { day: "Fri", sales: 2600 },
        { day: "Sat", sales: 1900 },
        { day: "Sun", sales: 1300 },
      ]


  return (
    <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-500 flex items-center">
          <CalendarRange className="h-5 w-5 mr-2 text-teal-600" /> Weekly Sales
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

  )
}

export default WeeklySales