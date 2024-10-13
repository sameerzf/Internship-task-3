import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Address"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
