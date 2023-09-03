import React from "react";

const DataCard = ({ name, origin, destination }) => {
  return (
    <div className="w-[300px] h-[200px]  bg-blue-950 hover:bg-transparent ease-linear duration-300 delay-100  border-t-8 border-t-blue-600 rounded-md p-4">
      <div className="">
        <p className="text-md font-semibold">
          <span className="text-red-500 mr-2 text-xl">Name:</span>
          {name}
        </p>
      </div>
      <div>
        <ul>
          <li>{`Origin:${origin}`}</li>
          <li>{`Destination:${destination}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default DataCard;
