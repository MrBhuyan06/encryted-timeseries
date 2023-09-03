import React from "react";

const DataCard = () => {
  return (
    <div className="w-[220px] h-[200px]  bg-blue-950 hover:bg-transparent ease-linear duration-300 delay-100  border-t-8 border-t-blue-600 rounded-md p-4">
      <div className="">
        <p className="text-lg font-semibold">
          <span className="text-red-500 mr-2 text-xl">Name:</span>Abhihske
        </p>
      </div>
      <div>
        <ul>
          <li>Destination:Delhi</li>
          <li>Origin:Bhubaneswar</li>
        </ul>
      </div>
    </div>
  );
};

export default DataCard;
