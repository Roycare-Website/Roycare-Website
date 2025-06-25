import React, { useState } from "react";


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    paymentMethod: "momo", // default
  });

  const [cartItems] = useState([
    { name: "Baby Lotion", price: 50, quantity: 2 },
    { name: "Shampoo", price: 40, quantity: 1 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const order = {
      ...formData,
      items: cartItems,
      totalAmount: total,
    };

    console.log("Sending Order:", order);

    // You would typically send to backend or trigger Paystack/Flutterwave payment here
    // await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(order) });
    alert("Order submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10 mt-10">
      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <textarea name="address" placeholder="Shipping Address" required onChange={handleChange} className="w-full border px-3 py-2 rounded" />

        {/* Payment Method */}
        <div className="space-y-2">
          <label className="font-semibold">Payment Method:</label>
          <select name="paymentMethod" onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="momo">Mobile Money</option>
            <option value="card">Card Payment</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-[#4A7807] text-white py-3 rounded hover:bg-[#3d6506]">
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded shadow-md space-y-4">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex justify-between border-b pb-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>GHS {item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>GHS {total}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
