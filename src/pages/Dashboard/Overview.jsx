import React from "react"
import WeeklySales from "../../component/WeeklySales"
import WeeklyOrders from "../../component/WeeklyOrders"
import TotalSales from "../../component/TotalSales"
import ActiveUsers from "../../component/ActiveUsers"
import OrdersToday from "../../component/OrdersToday"

const Overview = () => {
 

 

  // const productCategoryData = [
  //   { category: "SkinCare", percentage: 35 },
  //   { category: "Bath & Body", percentage: 25 },
  //   { category: "Eco Diapering", percentage: 20 },
  //   { category: "Hair Care", percentage: 10 },
  //   { category: "Others", percentage: 10 },
  // ]

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {/* Weekly Sales Card */}
       < WeeklySales/>
        {/* Weekly Orders Card */}
       < WeeklyOrders/>

        {/* Total Sales Card */}
        <TotalSales/>

        {/* Active Users Card */}
       <ActiveUsers/>
      </div>
      < OrdersToday/>
    </div>
  )
}

export default Overview
