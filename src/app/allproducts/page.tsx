import React from "react";
import Image from "next/image";

const page = () => {
  // Array of image imports for dynamic rendering
  const images = Array.from({ length: 30 }, (_, i) => `/p${i + 1}.png`);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">New 500</h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 w-full">
          <img
            src="/productsidebar.jpg"
            alt="Sidebar"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {images.map((src, index) => (
            <div key={index} className="w-full">
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                width={348}
                height={535}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Related Image */}
      <div className="mt-8">
        <Image
          src="/productrelated.png"
          alt="Related Products"
          width={1029}
          height={259}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default page;
