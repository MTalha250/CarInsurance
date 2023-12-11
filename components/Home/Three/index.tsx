import React from "react";

const Three = () => {
  return (
    <div className="flex flex-col items-center px-16 bg-gray-100 py-10">
      <h1 className="font-bold my-10 text-3xl">Types of car insurance</h1>
      <div className="flex w-full justify-center">
        <div className="w-1/3 bg-black h-[50vh]"></div>
        <div className="w-1/3 px-10">
          <h1 className="font-bold text-2xl my-3">
            Comprehensive car insurance
          </h1>
          <p className="mb-10 text-lg">
            Provides full coverage protecting the third party and injuries and
            damage to the insured car
          </p>
          <h1 className="font-bold text-2xl my-3">Third Party car insurance</h1>
          <p className="text-lg">
            This car insurance provides coverage for damages or injuries caused
            to third parties ONLY involving the insured car
          </p>
        </div>
      </div>
    </div>
  );
};

export default Three;
