import React, { useState } from 'react';
import { 
  User, 
  Package, 
  CreditCard, 
  MapPin, 
  Settings, 
  Heart, 
  ShoppingBag,
  Eye,
  Star,
  Calendar,
  Truck,
  CheckCircle,
  Clock
} from 'lucide-react';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const customerData = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    memberSince: 'January 2023',
    totalOrders: 24,
    totalSpent: 1850.50,
    loyaltyPoints: 350
  };

  const recentOrders = [
    {
      id: '#ORD-001',
      date: '2024-05-18',
      status: 'Delivered',
      total: 89.99,
      items: 3,
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: '#ORD-002',
      date: '2024-05-15',
      status: 'Shipped',
      total: 156.50,
      items: 2,
      statusColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: '#ORD-003',
      date: '2024-05-10',
      status: 'Processing',
      total: 234.75,
      items: 5,
      statusColor: 'text-yellow-600 bg-yellow-100'
    }
  ];

  const wishlistItems = [
    { id: 1, name: 'Wireless Headphones', price: 199.99, image: '/api/placeholder/80/80' },
    { id: 2, name: 'Smart Watch', price: 299.99, image: '/api/placeholder/80/80' },
    { id: 3, name: 'Laptop Stand', price: 49.99, image: '/api/placeholder/80/80' }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Smith',
      address: '123 Main St, Apt 4B',
      city: 'New York, NY 10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Smith',
      address: '456 Business Ave, Suite 200',
      city: 'New York, NY 10017',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      last4: '4532',
      expiry: '12/26',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8901',
      expiry: '03/25',
      isDefault: false
    }
  ];

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-[#4D720A] text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatusBadge = ({ status, colorClass }) => (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {status}
    </span>
  );

  const renderOverview = () => (
    <div className="space-y-6 ">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r bg-[#4D720A]  text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {customerData.name}!</h2>
        <p className="opacity-90">Here's what's happening with your account</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <ShoppingBag className="text-[#4D720A]" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold">{customerData.totalOrders}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <CreditCard className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold">${customerData.totalSpent}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Star className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Loyalty Points</p>
              <p className="text-2xl font-bold">{customerData.loyaltyPoints}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Calendar className="text-orange-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="text-lg font-bold">{customerData.memberSince}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <StatusBadge status={order.status} colorClass={order.statusColor} />
                </div>
                <div className="text-right">
                  <p className="font-semibold">${order.total}</p>
                  <p className="text-sm text-gray-600">{order.items} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold">Order History</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-600">Placed on {order.date}</p>
                  </div>
                  <StatusBadge status={order.status} colorClass={order.statusColor} />
                </div>
                <div className="text-right">
                  <p className="font-semibold">${order.total}</p>
                  <p className="text-sm text-gray-600">{order.items} items</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 text-sm border rounded hover:bg-gray-50">
                  <Eye size={16} />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 text-sm border rounded hover:bg-gray-50">
                  <Truck size={16} />
                  <span>Track Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold">Wishlist</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-3" />
              <h4 className="font-semibold mb-2">{item.name}</h4>
              <p className="text-lg font-bold text-[#4D720A] mb-3">${item.price}</p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-[#4D720A] text-white py-2 px-4 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
                <button className="p-2 border rounded hover:bg-gray-50">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-xl font-semibold">Addresses</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add New Address
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {addresses.map((address) => (
            <div key={address.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{address.type}</h4>
                  {address.isDefault && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Default
                    </span>
                  )}
                </div>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
              </div>
              <p className="font-medium">{address.name}</p>
              <p className="text-gray-600">{address.address}</p>
              <p className="text-gray-600">{address.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPaymentMethods = () => (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-xl font-semibold">Payment Methods</h3>
        <button className="bg-[#4D720A] text-white px-4 py-2 rounded hover:bg-blue-700">
          Add New Card
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{method.type} •••• {method.last4}</p>
                    <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                  </div>
                  {method.isDefault && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Default
                    </span>
                  )}
                </div>
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold">Profile Settings</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Smith"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={customerData.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={() => alert('Profile updated successfully!')}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account and track your orders</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 ">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="space-y-2">
                <TabButton
                  id="overview"
                  label="Overview"
                  icon={User}
                  isActive={activeTab === 'overview'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="orders"
                  label="Orders"
                  icon={Package}
                  isActive={activeTab === 'orders'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="wishlist"
                  label="Wishlist"
                  icon={Heart}
                  isActive={activeTab === 'wishlist'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="addresses"
                  label="Addresses"
                  icon={MapPin}
                  isActive={activeTab === 'addresses'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="payment"
                  label="Payment"
                  icon={CreditCard}
                  isActive={activeTab === 'payment'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="profile"
                  label="Profile"
                  icon={Settings}
                  isActive={activeTab === 'profile'}
                  onClick={setActiveTab}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'wishlist' && renderWishlist()}
            {activeTab === 'addresses' && renderAddresses()}
            {activeTab === 'payment' && renderPaymentMethods()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;