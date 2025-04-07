import React from "react";

const CreditBill = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-2xl p-4 text-center">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Credit Card Bill</h2>
        <p className="text-gray-600 mb-4">Pay your credit card bills quickly and securely with Fast-Pay.</p>
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-4">
          <p className="text-sm">No late fees • Earn cashback • Safe payments</p>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Card Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreditBill;
