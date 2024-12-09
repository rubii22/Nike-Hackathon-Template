import React from "react";

const OrderTopSection = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen px-4 lg:px-20 py-8">
      {/* Left Section: Delivery and Form */}
      <div className="w-full lg:w-2/3 pr-6">
        <h1 className="text-xl font-bold mb-4">How would you like to get your order?</h1>
        <p className="text-sm text-gray-600 mb-6">
          Customs regulation for India require a copy of the recipient’s KYC. The address on the KYC needs to match the shipping address.
          Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for
          the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not
          match your shipping address, please click the link for more information.{" "}
          <a href="#" className="text-blue-600 underline">
            Learn More
          </a>
        </p>

        {/* Delivery Option */}
        <div className="mb-6">
          <button className="flex items-center justify-between w-full lg:w-1/2 p-4 border-2 border-black rounded-md font-semibold text-left">
            <span>Deliver It</span>
            <span className="text-black">&#10003;</span>
          </button>
        </div>

        {/* Address Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Enter your name and address:</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="India">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Save this address to my profile</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Make this my preferred address</span>
              </label>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">What's your contact information?</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500">A confirmation email will be sent after checkout.</p>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500">A carrier might contact you to confirm delivery.</p>
          </form>
        </div>

        {/* PAN Details */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">What's your PAN?</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="PAN"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500">
              Enter your PAN to enable payment with UPI, Net Banking or local card methods.
            </p>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>Save PAN details to Nike Profile</span>
            </label>
            <label className="flex items-center space-x-2 mt-4">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-sm text-gray-500">
                I have read and consent to eShopWorld processing my information in accordance with the{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Statement
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Cookie Policy
                </a>
                .
              </span>
            </label>
          </form>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <button
            className="w-full lg:w-1/3 bg-gray-300 text-white font-semibold py-3 rounded-md cursor-not-allowed"
            disabled
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Section: Order Summary */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md shadow-md mt-8 lg:mt-0">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-bold">₹ 20,890.00</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">Delivery/Shipping</p>
          <p className="font-bold">Free</p>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <p className="font-semibold">Total</p>
          <p className="font-bold">₹ 20,890.00</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          (The total reflects the price of your order, including all duties and taxes.)
        </p>
        <div className="mt-6">
          <div className="flex items-start space-x-4">
            <img
              src="/menshirt.png" // Replace with actual image path
              alt="T-shirt"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">Nike Dri-FIT ADV Techknit Ultra Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-600">Qty: 1 | Size: L</p>
              <p className="text-sm text-gray-600">₹ 3,895.00</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mt-4">
            <img
              src="/menshoes.png" // Replace with actual image path
              alt="Shoes"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">Nike Air Max 97 SE Men's Shoes</p>
              <p className="text-sm text-gray-600">Qty: 1 | Size: UK 8</p>
              <p className="text-sm text-gray-600">₹ 16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTopSection;
