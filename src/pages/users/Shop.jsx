import React, { useState, useMemo } from "react";
import { Link } from "react-router"; // Correct import
import Product3 from "../../assets/images/product3.png";

const Shop = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  const exchangeRates = {
    USD: 1,
    GHS: 12.5,
    EUR: 0.85,
    GBP: 0.75,
  };

  const currencySymbols = {
    USD: "$",
    GHS: "₵",
    EUR: "€",
    GBP: "£",
  };

  const products = [
    {
      id: 1,
      name: "Fragrance-Free Body Lotion",
      category: "Cream",
      price: 20.0,
      rating: 5,
      quantity: 10,
      inStock: true,
      image: Product3,
    },
    {
      id: 2,
      name: "Organic Baby Shampoo",
      category: "Bath & Hygiene",
      price: 15.0,
      rating: 5,
      quantity: 0,
      inStock: false,
      image: Product3,
    },
    {
      id: 3,
      name: "Gentle Baby Moisturizer",
      category: "Skincare",
      price: 25.0,
      rating: 5,
      quantity: 6,
      inStock: true,
      image: Product3,
    },
    {
      id: 4,
      name: "Natural Baby Powder",
      category: "Skincare",
      price: 18.0,
      rating: 4,
      quantity: 2,
      inStock: true,
      image: Product3,
    },
    {
      id: 5,
      name: "Soothing Baby Oil",
      category: "Skincare",
      price: 22.0,
      rating: 5,
      quantity: 0,
      inStock: false,
      image: Product3,
    },
  ];

  // Get unique categories for filter dropdown
  const categories = [...new Set(products.map(product => product.category))];

  const convertPrice = (priceInUSD) => {
    const convertedPrice = priceInUSD * exchangeRates[selectedCurrency];
    return convertedPrice.toFixed(2);
  };

  const formatPrice = (price) => {
    const symbol = currencySymbols[selectedCurrency];
    return `${symbol}${convertPrice(price)}`;
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleStockFilterChange = (event) => {
    setStockFilter(event.target.value);
  };

  const handlePriceRangeChange = (event, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseFloat(event.target.value);
    setPriceRange(newRange);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setStockFilter("All");
    setPriceRange([0, 100]);
  };

  // Filter products based on search term and filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesStock = stockFilter === "All" || 
        (stockFilter === "In Stock" && product.inStock) ||
        (stockFilter === "Out of Stock" && !product.inStock);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesStock && matchesPrice;
    });
  }, [products, searchTerm, selectedCategory, stockFilter, priceRange]);

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[70vh] bg-[url('assets/images/baby.png')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center bg-black/50 h-50 rounded-4xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold pb-4">
            Products List
          </h1>
          <p className="text-white text-2xl md:text-xl font-normal mb-3 p-5">
            Purity, safety, and sustainability are not marketing words; they are
            our promises
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-[#FCD8D4] py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-4 ">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border border-black rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-[#47603D] focus:border-[#47603D]
                           shadow-sm"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#47603D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="currency-select"
                className="text-sm font-medium text-black"
              >
                Currency:
              </label>
              <select
                id="currency-select"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className="border border-black px-4 py-3 rounded-lg text-sm text-black shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-[#47603D] focus:border-[#47603D]"
              >
                <option value="USD">USD ($)</option>
                <option value="GHS">GHS (₵)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-[#47603D] text-white rounded-lg
                       hover:bg-[#3b6405] transition-colors font-medium shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm
                             focus:outline-none focus:ring-2 focus:ring-[#47603D] focus:border-[#4A7807]"
                  >
                    <option value="All">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Stock Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <select
                    value={stockFilter}
                    onChange={handleStockFilterChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm
                             focus:outline-none focus:ring-2 focus:ring-[#47603D] focus:border-[#4A7807]"
                  >
                    <option value="All">All Products</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range (USD)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(e, 0)}
                      className="w-20 border border-gray-300 px-2 py-1 rounded text-sm
                               focus:outline-none focus:ring-1 focus:ring-[#47603D]"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(e, 1)}
                      className="w-20 border border-gray-300 px-2 py-1 rounded text-sm
                               focus:outline-none focus:ring-1 focus:ring-[#47603D]"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 
                           underline hover:no-underline transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {searchTerm && (
              <span> for "{searchTerm}"</span>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto p-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-[#47603D] text-white rounded-md hover:bg-[#3b6405] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 bg-white">
                  {/* Ratings */}
                  <div className="flex justify-center space-x-1 mb-3 text-yellow-400">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 text-center mb-2 uppercase tracking-wide">
                    {product.category}
                  </p>

                  <h2 className="text-lg font-semibold text-center mb-3 text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>

                  <p className="text-center font-medium mb-4 text-gray-700">
                    {formatPrice(product.price)}
                  </p>

                  {product.inStock ? (
                    <Link to={`/product/${product.id}`}>
                      <button className="w-full bg-[#47603D] text-white py-2 px-4 rounded-2xl 
                                     hover:bg-[#3b6405] transition-colors font-medium shadow-sm hover:shadow-md">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-400 text-white py-2 px-4 rounded-2xl 
                                 cursor-not-allowed font-medium"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;