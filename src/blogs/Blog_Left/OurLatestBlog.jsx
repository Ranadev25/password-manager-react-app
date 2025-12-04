import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Img1 from "../../../src/assets/blog2-img1.png";
import Img2 from "../../../src/assets/blog2-img2.png";
import { Link } from "react-router";
const OurLatestBlog = () => {
  return (
    <div>
      <div className="w-[94%] sm:w-[500px] mx-auto text-center">
        <h1 className="text-[45px] font-[500] leading-14">
          Our Latest Blog & News
        </h1>
        <p className="text-[17px] mt-5 text-[#554F5F]">
          Our dynamic Landing Pages redefine user experiences, eSoft ensuring
          every click counts, dive into the world of insightful.
        </p>
      </div>

      <div className="mt-10 mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-7 ">
        <div className="bg-white  ">
          <div className="w-full overflow-hidden ">
            <img
              className=" mx-auto hover:scale-[1.5] hover:rotate-12 transition-transform duration-500 ease-in-out  "
              src={Img1}
              alt=""
            />
          </div>

          <div className="p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[17px] text-[#554F5F]">
                <FaRegCalendarAlt />
                <p>10 October 2023</p>
              </div>
              <div className="flex items-center gap-3 text-[17px] text-[#554F5F]">
                <FaRegUser />
                <p>Rabby Mahmud</p>
              </div>
            </div>
            <div className="mt-5 mb-4 hover:text-blue-600 transition duration-500 ease-in-out">
              <Link
                to="/blogs/blog-detailes"
                className="text-[25px] font-[500] "
              >
                The Ultimate Email Campaign Playbook
              </Link>
            </div>
            <p className="text-[17px] text-[#554F5F] mb-5">
              Effortlessly design stunning emails, automate your market
              workflow, & precisely target your audience for maximum.
            </p>
            <button className=" flex items-center gap-2 font-[500] cursor-pointer">
              <Link to="/blogs/blog-detailes">Read more</Link>
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="bg-white  ">
          <div className="w-full overflow-hidden ">
            <img
              className=" mx-auto hover:scale-[1.5] hover:rotate-12 transition-transform duration-500 ease-in-out  "
              src={Img2}
              alt=""
            />
          </div>

          <div className="p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[17px] text-[#554F5F]">
                <FaRegCalendarAlt />
                <p>10 October 2023</p>
              </div>
              <div className="flex items-center gap-3 text-[17px] text-[#554F5F]">
                <FaRegUser />
                <p>Rabby Mahmud</p>
              </div>
            </div>
            <div className="mt-5 mb-4 hover:text-blue-600 transition duration-500 ease-in-out">
              <Link
                to="/blogs/blog-detailes"
                className="text-[25px] font-[500] "
              >
                Email Design: A Deep Dive in Visual Impact
              </Link>
            </div>
            <p className="text-[17px] text-[#554F5F] mb-5">
              Effortlessly design stunning emails, automate your market
              workflow, & precisely target your audience for maximum.
            </p>
            <button className=" flex items-center gap-2 font-[500] cursor-pointer">
              <Link to="/blogs/blog-detailes">Read more</Link>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestBlog;
