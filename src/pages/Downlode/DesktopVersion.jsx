import React from "react";

import Main from "../../../src/assets/10065.png";
import Appstore from "../../../src/assets/10063.png";
import Microsoft from "../../../src/assets/10064.png";

const DesktopVersion = () => {
  return (
    <div className="lg:w-[90%] w-[90%] mx-auto p-7 rounded-md bg-white">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 items-center bg-[#ece5fec3]  rounded-md">
        <div>
          <img src={Main} alt="" />
        </div>
        <div className=" p-5">
          <button className="bg-[#4809e747] px-3 py-1 rounded-full text-[17px] text-blue-700">
            Apps eSoft
          </button>
          <h1 className="text-4xl md:text-[40px] font-[500] my-5">
            Apps for all your devices
          </h1>
          <div className="">
            <img
              className="mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Appstore}
              alt=""
            />
            <img
              className="mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Microsoft}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVersion;
