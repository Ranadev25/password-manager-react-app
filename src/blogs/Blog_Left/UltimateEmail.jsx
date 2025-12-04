import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import "../../about/aboutComponent/AboutHero.css";
import Person from "../../../src/assets/10057m.png";
import Mainimg from "../../../src/assets/chart3image.png";
import ShadowLeft from "../../../src/assets/blueShedowLeftCenter.png";
import Shadowright from "../../../src/assets/blueShedowrightCenter.png";
const UltimateEmail = () => {
  return (
    <div className="bg-[url('../../../src/assets/blueShedowLeftCenter.png')] bg-no-repeat lg:bg-left max-lg:bg-bottom-left ">
      <div className=" bg-[url('../../../src/assets/blueShedowrightCenter.png')] bg-no-repeat lg:bg-right max-lg:bg-top-right overflow-hidden">
        <div className="lg:flex w-[90%]  mx-auto  gap-16 pt-20 relative  ">
          <div className="lg:w-[60%]">
            <h1 className="text-4xl font-[500] md:text-7xl max-lg:text-center">
              The Ultimate Email Campaign Playbook
            </h1>
            <p className="text-[17px] text-[#554F5F] my-7">
              Where email marketing meets innovation. Say goodbye to generic
              campaigns and hello to personalised, high-converting emails that
              resonate with your audience.
            </p>
            <div className=" sm:flex mb-10 items-center gap-5 ">
              <div className=" my-5">
                <div className="flex items-center gap-3">
                  <img src={Person} alt="" />
                  <div>
                    <h1 className="text-[20px] font-[500]">Jonson Brans</h1>
                    <p className="text-[18px] text-[#554F5F]">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <button className="border-x-2 px-3 border-[#ddddddb7]">
                  #Email Marketing
                </button>
              </div>
              <div className="ml-4 my-5">
                <FaRegCalendarAlt className="inline-block" />
                <p className="inline-block">10 October 2023</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] ">
            <img
              className=" aboutmainimg lg:max-w-130 mx-auto lg:absolute top-32 right-[-100px]"
              src={Mainimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateEmail;
