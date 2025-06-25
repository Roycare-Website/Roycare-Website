import React, { useState } from 'react';
import { Search, Star, ShoppingCart, Menu, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import Product3 from '../../assets/images/product3.png'

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  const [reviewData, setReviewData] = useState({
    rating: 5,
    name: '',
    email: '',
    review: ''
  });

  const mainImage = "/api/placeholder/400/500";

  const sidebarProducts = [
    {
      name: "Matte Finish Eyeliner",
      price: 23.50,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Instant Glow Cream",
      price: 11.00,
      rating: 4,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Gift Card",
      price: 65.00,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Smudge Proof Liquid Lipstick",
      price: 9.00,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Under Eye Cream",
      price: 16.00,
      image: "/api/placeholder/60/60"
    }
  ];

  const relatedProducts = [
    {
      name: "Acne Fighting Moisturizer",
      price: 28.00,
      rating: 4,
      image: "/api/placeholder/200/250"
    },
    {
      name: "Matte Finish Eyeliner",
      price: 28.50,
      category: "Hair Conditioner",
      rating: 3,
      image: "/api/placeholder/200/250"
    },
    {
      name: "Ultra Dry Skin Moisturizer",
      price: 20.00,
      rating: 4,
      image: "/api/placeholder/200/250",
      isOnSale: true
    }
  ];

  const categories = ["Hair Conditioner", "Lotion", "Cream", "Eye Liner", "Serum", "Makeup Remover", "Oil", "Uncategorized"];
  const tags = ["COMBINATION SKIN", "DRY SKIN", "NORMAL SKIN", "OILY SKIN"];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', reviewData);
    // Reset form
    setReviewData({ rating: 5, name: '', email: '', review: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
     {/* Breadcrumb */}
      <div className="bg-[#466C00] py-16 min-h-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Shop</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images & Details */}
          <div className="lg:w-3/4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Gallery */}
              <div className="md:w-1/2">
                <div className="w-full">
                  <img
                    src={Product3}
                    alt="Full Coverage Liquid Foundation"
                    className="w-full h-96 md:h-[500px] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Body Wash
                  </h1>
                  <p className="text-2xl text-[#466C00] font-semibold">$24.00</p>
                </div>

                <p className="text-gray-600">
                  Hurry up! Stocks and up
                </p>

                {/* Add to Cart */}
                <div className="flex items-center gap-4">
                  <button className="bg-[#466C00] text-white px-6 py-3 rounded hover:bg-red-700 transition-colors">
                    ADD TO CART
                  </button>
                  <button className="border border-gray-300 p-3 rounded hover:border-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Worldwide Shipping:</span> on all order $200, Delivery in 2-5 working days
                  </p>
                  <a href="#" className="text-red-600 hover:underline">Shipping & Return</a>
                </div>

                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut sit totam, tacitia nec est consequuntur mattis pulvinar dapibus leo.
                </p>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="mt-12 space-y-4">
              {['Specification', 'Shipping Info', 'Description', 'Additional Details', 'Product Certificate'].map((section) => (
                <div key={section} className="boarder-t">
                  <button
                    onClick={() => toggleSection(section)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-gray-50"
                  >
                    <span>{section}</span>
                    {expandedSection === section ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedSection === section && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      {section === 'Specification' && (
                        <ul className="space-y-2 text-sm">
                          <li>• Purus ut placerat orci nulla pellentesque dignissim enim sit amet</li>
                          <li>• Adipiscing mollis lorem orci fermentum odio eu feugiat</li>
                          <li>• Ultrices mi tempus imperdiet nulla</li>
                          <li>• Ullamcorper velit sed</li>
                        </ul>
                      )}
                      {section !== 'Specification' && (
                        <p className="text-sm text-gray-600">
                          Content for {section} would be displayed here.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Related Products */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={Product3}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {/* {product.isOnSale && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded">
                          SALE
                        </span>
                      )} */}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        {renderStars(product.rating)}
                      </div>
                      {product.category && (
                        <p className="text-sm text-gray-600 text-center mb-1">{product.category}</p>
                      )}
                      <h3 className="font-semibold text-gray-900 text-center mb-2">{product.name}</h3>
                      <p className="text-red-600 font-medium text-center">{formatPrice(product.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-16 bg-gray-100 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 bg-red-600 text-white px-6 py-3 inline-block">
                  Reviews
                </h3>
              </div>

              <div>
                <p className="text-gray-600 mb-6">There are no reviews yet.</p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Be the first to review "Full Coverage Liquid Foundation"
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Your email address will not be published. Required fields are marked *
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your rating *
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewData({...reviewData, rating: star})}
                          className="text-2xl"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= reviewData.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={reviewData.name}
                        onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your review *
                      </label>
                      <input
                        type="text"
                        value={reviewData.review}
                        onChange={(e) => setReviewData({...reviewData, review: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={reviewData.email}
                      onChange={(e) => setReviewData({...reviewData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="save-info" className="rounded" />
                    <label htmlFor="save-info" className="text-sm text-gray-600">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleReviewSubmit}
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Product Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Product Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Shop For Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Shop for</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="text-left w-full hover:text-red-600 transition-colors text-gray-700">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <div className="space-y-4">
                {sidebarProducts.map((product, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <div className="flex items-center space-x-2">
                        {product.rating && (
                          <div className="flex">
                            {renderStars(product.rating)}
                          </div>
                        )}
                        <span className="text-sm text-red-600 font-medium">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Product tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-xs border rounded-full bg-white text-gray-700 border-gray-300 hover:border-red-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;