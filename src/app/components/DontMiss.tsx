import React from "react";

const DontMiss = () => {
  return (
    <section className="flex flex-col items-center px-6 py-20 bg-white">
      {/* Heading aligned to the left */}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 w-full max-w-7xl text-left">
        Don't Miss
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-7xl">
        <img
          src="Dontmiss.png"
          alt="Don't Miss"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mt-16 max-w-5xl px-4">
        <h3 className="text-4xl sm:text-6xl font-semibold">
          FLIGHT ESSENTIALS
        </h3>
        <p className="text-black mt-6 text-lg sm:text-2xl">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="mt-12 px-6 py-2.5 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition-colors duration-300">
          Shop
        </button>
      </div>
    </section>
  );
};

export default DontMiss;
