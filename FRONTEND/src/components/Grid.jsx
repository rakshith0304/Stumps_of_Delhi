import React from "react";

const Grid = () => {
  return (
    <div className="grid grid-cols-3 gap-12 mt-12 mx-5">
      <div className="h-[300px] flex justify-center border border-gray-300">
        <p className="mt-2 text-lg font-bold">Weather</p>
      </div>
      <div className="h-[300px] flex flex-col items-center justify-between border border-gray-300">
        <p className="mt-2 text-lg font-bold">Live Score</p>
        <button className="mb-2 px-4 py-2 rounded bg-blue-500 text-white hover:opacity-80 active:opacity-50 transition-opacity">
          More
        </button>
      </div>
      <div className="h-[300px] flex flex-col items-center justify-between border border-gray-300">
        <p className="mt-2 text-lg font-bold">Map with live count</p>
        <button className="mb-2 px-4 py-2 rounded bg-blue-500 text-white hover:opacity-80 active:opacity-50 transition-opacity">
          Book Box
        </button>
      </div>
    </div>
  );
};

export default Grid;
