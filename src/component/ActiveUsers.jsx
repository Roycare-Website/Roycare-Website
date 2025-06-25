import { ArrowUp, User, Users } from 'lucide-react'
import React from 'react'

const ActiveUsers = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-500 flex items-center">
          <User className="h-5 w-5 mr-2 text-purple-600" /> Active Users
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
// </div>
// <div className="bg-black w-50 h-50 p-5">

  )
}

export default ActiveUsers