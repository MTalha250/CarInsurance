import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[70vh] bg-gray-100 px-16">
      <div className="w-2/5 h-[50vh] bg-black"></div>
      <div className="w-3/5 px-20">
        <p className="text-lg font-semibold">Car Insurance</p>
        <h1 className="font-bold text-4xl tracking-wider my-5">
          Compare and buy online. Get your car insurance issued instantly 24/7.
        </h1>
        <p className="text-sm my-5">
          Are you looking to buy car insurance? Buying car insurance has never
          been this easy, thanks to Shory partnering with the most trusted car
          insurance companies in the UAE.
        </p>
        <button className="px-20 py-3 bg-black text-white rounded-xl">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
