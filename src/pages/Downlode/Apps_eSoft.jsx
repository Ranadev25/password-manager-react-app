import React from "react";

import Main1 from "../../../src/assets/10062.png";
import Main2 from "../../../src/assets/10065.png";
import Appstorbtn from "../../../src/assets/10063.png";
import Microsoftbtn from "../../../src/assets/10064.png";
import Bgshadow from "../../../src/assets/10070.png";
const Apps_eSoft = () => {
  return (
    <div className="bg-[url('../../../src/assets/10070.png')] bg-no-repeat bg-top-right mb-10">
      <div className="w-[90%] sm:w-[400px] mx-auto text-center">
        <button className="bg-[#ECE5FE] px-3 py-1 rounded-full text-[17px] text-blue-700">
          Apps eSoft
        </button>
        <h1 className="text-4xl md:text-[40px] font-[500] my-5">
          Apps for all your devices
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto  gap-5">
        <div className="bg-white p-5 rounded-xl">
          <img src={Main1} alt="" />
          <button className="bg-[#ECE5FE] px-3 py-0.5 mt-5 rounded-full text-[17px] text-blue-700">
            Mobile
          </button>
          <h1 className="text-[35px] my-3 font-[500]">Mobile App Version</h1>
          <div className="">
            <img
              className="mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Appstorbtn}
              alt=""
            />
            <img
              className="mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Microsoftbtn}
              alt=""
            />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl">
          <img src={Main2} alt="" />
          <button className="bg-[#ECE5FE] px-3 py-0.5 mt-5 rounded-full text-[17px] text-blue-700">
            Tablet
          </button>
          <h1 className="text-[35px] my-3 font-[500]">Tablet Version</h1>
          <div className="">
            <img
              className="mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Appstorbtn}
              alt=""
            />
            <img
              className=" mx-auto inline-block mr-3 cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 ease-in-out"
              src={Microsoftbtn}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps_eSoft;
