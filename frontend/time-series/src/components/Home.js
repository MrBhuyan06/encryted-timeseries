import React from "react";
import DataCard from "./DataCard.js";
const Home = () => {
  return (
    <div className="w-3/4 border-2 mx-auto min-h-screen p-4 mt-8">
      <div className="bg-blue-600 hover:bg-blue-500 ease-in-out duration-100 delay-75 p-4 rounded-md ">
        <p className="text-center font-semibold text-2xl ">
          ECRYTED_TIMESEIRES
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
