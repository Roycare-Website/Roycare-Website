import React, { useState } from "react";

const initialWishlist = [
  {
    id: 1,
    name: "Roycare Organic Baby Lotion",
    image: "https://via.placeholder.com/80",
    price: 45,
  },
  {
    id: 2,
    name: "Roycare Baby Detergent",
    image: "https://via.placeholder.com/80",
    price: 35,
  },
];

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    // You can implement actual cart logic here
    console.log("Moved to cart:", item.name);
    removeFromWishlist(item.id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">GHS {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => moveToCart(item)}
                  className="bg-[#466C00] text-white px-3 py-1 rounded hover:bg-teal-700 text-sm"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
