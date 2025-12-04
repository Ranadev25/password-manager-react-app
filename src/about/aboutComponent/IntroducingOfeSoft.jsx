import React from "react";
import "./AboutHero.css";
import { FaCheck } from "react-icons/fa6";

import Box1 from "../../../src/assets/about-page-box1.png";
import Box2 from "../../../src/assets/about-page-box2.png";
import Box3 from "../../../src/assets/about-page-box3.png";
import Dashbord from "../../../src/assets/about-page-img1.png";
import { Link } from "react-router";

const IntroducingOfeSoft = () => {
  return (
    <div className="px-3 md:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 mb-10 ">
        <div className="bg-white transition duration-300 ease-in-out hover:translate-y-[-15px] p-8 rounded gap-5 flex  items-center">
          <img className="bg-[#040bd510] p-4 rounded-full" src={Box1} alt="" />
          <div className="my-5">
            <h1 className="text-[40px] font-semibold">5k+</h1>
            <p className="text-[#4E4D61]">Total App Users</p>
          </div>
        </div>
        <div className="bg-white transition duration-300 ease-in-out hover:translate-y-[-15px] p-8 rounded gap-5 flex  items-center">
          <img className="bg-[#040bd510] p-4 rounded-full" src={Box2} alt="" />
          <div className="my-5">
            <h1 className="text-[40px] font-semibold">4.5k+</h1>
            <p className="text-[#4E4D61]">Satisfied Client</p>
          </div>
        </div>
        <div className="bg-white transition duration-300 ease-in-out hover:translate-y-[-15px] p-8 rounded gap-5 flex  items-center">
          <img className="bg-[#040bd510] p-4 rounded-full" src={Box3} alt="" />
          <div className="my-5">
            <h1 className="text-[40px] font-semibold">4k+</h1>
            <p className="text-[#4E4D61]">Our Verified Client</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-18 items-center text-[17px] mx-3">
        <div>
          <img src={Dashbord} alt="" />
        </div>
        <div>
          <h1 className="text-[40px] leading-12 font-semibold">
            Elevate Engagement: Introducing Of eSoft.
          </h1>
          <p className="text-[#4E4D61] leading-8 my-7">
            Revolutionise your approach to email marketing with eSoft. As
            pioneers the industry, we bring you a eSoft. comprehensive solution
            that no only simplifies but an transforms best option elevate and
            engagement.
          </p>
          <ul className=" leading-10">
            <li className="flex items-center gap-3">
              <div className="text-blue-500 text-[14px] bg-[#0d06de18] p-1 rounded-full">
                <FaCheck />
              </div>

              <span>Increased Organic Traffic</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-blue-500 text-[14px] bg-[#0d06de18] p-1 rounded-full">
                <FaCheck />
              </div>
              <span>Regular Performance Monitoring</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-blue-500 text-[14px] bg-[#0d06de18] p-1 rounded-full">
                <FaCheck />
              </div>
              <span>Improved Search Engine Rankings</span>
            </li>
          </ul>
          <button className="my-6 mt-10 ">
            <Link className="py-3.5 px-5 singinbtn" to="">
              <span className="">Get Started Now</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroducingOfeSoft;
