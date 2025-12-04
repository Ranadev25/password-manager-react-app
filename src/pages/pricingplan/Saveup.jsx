import React, { useState } from "react";
import { Link } from "react-router";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import "../../about/aboutComponent/AboutHero.css";
const Saveup = () => {
  const [togglebtn, setTogglebtn] = useState(false);
  return (
    <div className="px-5 md:px-10 lg:px-20  pt-5 mt-18 bg-[#F8F9FE]">
      <div>
        <div className="sm:w-[70%] md:w-[60%]  mx-auto text-center mb-10">
          <p className="text-[19px] text-[#554F5F] mb-5  font-[500]">
            Save up to 32% with yearly billing.
          </p>
          <div className=" ">
            <span
              className={`text-[16px] font-[500] ${
                togglebtn ? "text-[#554F5F]" : "text-[black]"
              }`}
            >
              Monthly
            </span>
            <span
              onClick={() => setTogglebtn(!togglebtn)}
              className="py-2 px-10 rounded-full relative transition-all duration-500 ease-in-out cursor-pointer mx-5 bg-[#6A5Cff]"
            >
              <span
                className={` absolute bg-white top-[50%] translate-y-[-50%] transition-transform duration-500 ease-in-out w-6 h-6 left-1 rounded-full ${
                  togglebtn ? "translate-x-12" : "translate-x-0"
                }`}
              ></span>
            </span>
            <span
              className={`text-[16px] font-[500] ${
                togglebtn ? "text-[black]" : "text-[#554F5F]"
              }`}
            >
              Yearly (Save 20%)
            </span>
          </div>
        </div>
      </div>

      <div className=" mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#271A3C]">
        {/* first list */}
        <div className="bg-white shadow p-5 rounded-md text-center">
          <h2 className="text-xl font-[500]">Free Forever</h2>
          <h1 className="text-5xl font-[500] my-3">Free</h1>
          <p>{togglebtn ? "Unlimited Month" : "Unlimited Yearly"}</p>
          <button className="my-6 py-3.5 singinbutton w-full max-w-100 ">
            <Link className="  " to="">
              <span className="">Free Forever</span>
            </Link>
          </button>
          <ul>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Storage</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Integrations</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Guests with Permissions</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Resource Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Time Tracking</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Workload Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Conditional Logic in Forms
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Access to Managed Services
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Team Sharing for Spaces</p>
            </li>
          </ul>
        </div>

        {/* 2nd list  */}
        <div className="bg-white shadow p-5 rounded-md text-center">
          <h2 className="text-xl font-[500]">Free Forever</h2>
          <h1 className="text-5xl font-[500] my-3">Free</h1>
          <p>{togglebtn ? "Unlimited Month" : "Unlimited Yearly"}</p>
          <button className="my-6 py-3.5 singinbutton w-full max-w-100 ">
            <Link className="  " to="">
              <span className="">Free Forever</span>
            </Link>
          </button>
          <ul>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Storage</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Integrations</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Guests with Permissions</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Resource Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Time Tracking</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Workload Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Conditional Logic in Forms
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Access to Managed Services
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Team Sharing for Spaces</p>
            </li>
          </ul>
        </div>

        {/* 3rd list  */}
        <div className="bg-white shadow p-5 rounded-md text-center">
          <h2 className="text-xl font-[500]">Free Forever</h2>
          <h1 className="text-5xl font-[500] my-3">Free</h1>
          <p>{togglebtn ? "Unlimited Month" : "Unlimited Yearly"}</p>
          <button className="my-6 py-3.5 singinbutton w-full max-w-100 ">
            <Link className="  " to="">
              <span className="">Free Forever</span>
            </Link>
          </button>
          <ul>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Storage</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Unlimited Integrations</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Guests with Permissions</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Resource Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Public Sharing</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Advanced Time Tracking</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Workload Management</p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Conditional Logic in Forms
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]">
                {" "}
                Access to Managed Services
              </p>
            </li>
            <li className="flex items-center gap-4 my-2">
              <FaCheck className="text-[#6A5Cff] text-[22px]" />
              <p className="text-[18px] font-[500]"> Team Sharing for Spaces</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Saveup;
