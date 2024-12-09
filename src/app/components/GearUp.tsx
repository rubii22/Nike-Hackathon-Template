import React from "react";

const GearUp = () => {
  return (
    <section className="px-6 py-10 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 w-full max-w-8xl text-left">
        Gear Up
      </h2>

      {/* Shop Men's and Women's Section */}
      <div className="flex flex-wrap justify-between items-center mb-6 w-full max-w-6xl">
        <div className="flex justify-start space-x-2 mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-medium">Shop Men's</h3>
          <button aria-label="Previous product">
            <img
              src="/leftarrow.png"
              alt="Left Arrow"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
          <button aria-label="Next product">
            <img
              src="/rightarrow.png"
              alt="Right Arrow"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
        </div>
        <div className="flex justify-start space-x-2">
          <h3 className="text-lg md:text-xl font-medium">Shop Women's</h3>
          <button aria-label="Previous product">
            <img
              src="/leftarrow.png"
              alt="Left Arrow"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
          <button aria-label="Next product">
            <img
              src="/rightarrow.png"
              alt="Right Arrow"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
        </div>
      </div>

      {/* Combined Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl">
        {/* Men's Product 1 */}
        <div className="text-left">
          <img
            src="/Gearup1.png"
            alt="Nike Dri-FIT ADV Techknit Ultra - Men's Short-Sleeve Running Top"
            className="w-full h-[250px] sm:h-[350px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT ADV Techknit Ultra</h3>
          <p className="text-sm md:text-md text-gray-500">Men's Short-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 3,895</p>
        </div>

        {/* Men's Product 2 */}
        <div className="text-left">
          <img
            src="/Gearup2.png"
            alt="Nike Dri-FIT Challenger - Men's 18cm 2-in-1 Shorts"
            className="w-full h-[250px] sm:h-[350px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT Challenger</h3>
          <p className="text-sm md:text-md text-gray-500">Men's 18cm (approx.) 2-in-1 Shorts</p>
          <p className="font-bold text-lg mt-2">₹ 2,495</p>
        </div>

        {/* Women's Product 1 */}
        <div className="text-left">
          <img
            src="/Gearup3.png"
            alt="Nike Dri-FIT ADV Run Division - Women's Long-Sleeve Running Top"
            className="w-full h-[250px] sm:h-[350px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Dri-FIT ADV Run Division</h3>
          <p className="text-sm md:text-md text-gray-500">Women's Long-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 5,295</p>
        </div>

        {/* Women's Product 2 */}
        <div className="text-left">
          <img
            src="/Gearup4.png"
            alt="Nike Fast - Women's Mid-Rise Running Leggings"
            className="w-full h-[250px] sm:h-[350px] object-cover"
          />
          <h3 className="font-medium mt-4 text-lg md:text-xl">Nike Fast</h3>
          <p className="text-sm md:text-md text-gray-500">Women's Mid-Rise Running Leggings</p>
          <p className="font-bold text-lg mt-2">₹ 3,795</p>
        </div>
      </div>
    </section>
  );
};

export default GearUp;
