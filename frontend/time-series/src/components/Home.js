import io, { Socket } from "socket.io-client";
import DataCard from "./DataCard.js";
import { useEffect, useState } from "react";
import { bddata, dbdata } from "../utils/Mock.js";

const socket = io("http://localhost:8080");

const Home = () => {
  const [data, setData] = useState(dbdata);

  useEffect(() => {
    getSocketData();
  }, [data]);
  function getSocketData() {
    socket.on("initCon", (payload) => {
      setData([...data, payload]);
    });
    socket.on("updatedoc", (payload) => {
      setData([...data, payload]);
    });
  }
  return (
    <div className="w-3/4 border-2 mx-auto min-h-screen p-4 mt-8">
      <div className="bg-blue-600 hover:bg-blue-500 ease-in-out duration-100 delay-75 p-4 rounded-md ">
        <p className="text-center font-semibold text-2xl ">
          ECRYTED_TIMESEIRES
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
        {data.map((ele) => {
          return <DataCard {...ele} />;
        })}
        {/* <DataCard bddata[0] />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard /> */}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
