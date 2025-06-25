import { ArrowUp, DollarSign } from 'lucide-react'
import React from 'react'

const TotalSales = () => {
    
  return (
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
  )
}

export default TotalSales