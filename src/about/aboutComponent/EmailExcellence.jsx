import React from "react";

import "./AboutHero.css";
import Deshbord from "../../../src/assets/dashbordSquere.png";
import Sec_icon1 from "../../../src/assets/about-page-sec-icon1.png";
import Sec_icon2 from "../../../src/assets/about-page-sec-icon2.png";
import Sec_icon3 from "../../../src/assets/about-page-sec-icon3.png";
import BgBlueleft from "../../../src/assets/blueShedowLeftCenter.png";
import BgBluecenter from "../../../src/assets/blueShedowCenterCercle.png";

const EmailExcellence = () => {
  return (
    <div className="mt-24 p-3 text-[17px] lg:mb-42">
      <div className="sm:w-[500px] mx-auto text-center">
        <h1 className="text-[40px] leading-14 font-semibold">
          Email Excellence Starts Here
        </h1>
        <p className="text-[#4E4D61]">
          Revolutionise your approach to email marketing with eSoft. As pioneers
          the industry, we bring you a eSoft comprehensive solution that only.
        </p>
      </div>
      <div className="lg:bg-[url('../../../src/assets/blueShedowCenterCercle.png')] bg-center bg-no-repeat relative px-5 md:px-10 lg:px-18">
        <div className="lg:w-[60%] mt-20 mb-10 md:mt-36">
          <img src={Deshbord} alt="" />
        </div>
        <div className="lg:absolute top-[-50px] right-0 bg-[url('../../../src/assets/blueShedowLeftCenter.png')] bg-no-repeat ">
          <div className=" aboutcard e border-blue-500 border-2 max-lf:mx-auto   p-6 rounded-md hover:text-white w-full hover:bg-blue-500 bg-white lg:absolute lg:w-[60%] right-10 top-0 ">
            <img
              className="bg-[#1c05e41f] p-3 rounded-full mb-5"
              src={Sec_icon1}
              alt=""
            />
            <h3 className="text-2xl font-semibold my-3">
              Comprehensive Analytics:
            </h3>
            <p className="text-[#4E4D61]">
              Gain valuable insights into your email performance. eSoft offers
              robust analytics and reporting tools
            </p>
          </div>
          <div className=" my-5 aboutcard  border-blue-500 border-2 mx-auto  p-6 rounded-md hover:text-white w-full hover:bg-blue-500 bg-white mr-10 lg:absolute lg:w-[60%] right-10 top-[238px] ">
            <img
              className="bg-[#1c05e41f] p-3 rounded-full mb-5"
              src={Sec_icon2}
              alt=""
            />
            <h3 className="text-2xl font-semibold my-3">
              Effortless Automation:
            </h3>
            <p className="text-[#4E4D61]">
              Gain valuable insights into your email performance. eSoft offers
              robust analytics and reporting tools
            </p>
          </div>
          <div className=" aboutcard  border-blue-500 border-2 mx-auto w-full  p-6 rounded-md hover:text-white hover:bg-blue-500 bg-white lg:w-[60%] lg:translate-y-[510px] ">
            <img
              className="bg-[#1c05e41f] p-3 rounded-full mb-5"
              src={Sec_icon3}
              alt=""
            />
            <h3 className="text-2xl font-semibold my-3">
              Personalised Targeting:
            </h3>
            <p className="text-[#4E4D61]">
              Gain valuable insights into your email performance. eSoft offers
              robust analytics and reporting tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailExcellence;
