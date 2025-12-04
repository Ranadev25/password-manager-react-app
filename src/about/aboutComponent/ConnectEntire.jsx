import React from "react";

import BrandLogo from "../../../src/assets/brand-logo3.png";
import { Link } from "react-router";

const ConnectEntire = () => {
  return (
    <div className=" relative p-5 md:px-10 lg:px-18 text-[17px]">
      <div className="max-w-[500px] relative top-44 left-[50%] text-center translate-x-[-50%]">
        <h1 className="text-[40px] font-semibold ">Connect entire workflows</h1>
        <p className="text-[#4E4D61] leading-7 my-3">
          Join a growing community of satisfied customers! Over 4K+ users have
          already good chosen eSoft for its reliability, performance.
        </p>
        <button className="my-6 ">
          <Link className="py-3.5 px-5 singinbtn" to="">
            <span className="">Sign Up For Free</span>
          </Link>
        </button>
      </div>
      <img className="mt-20" src={BrandLogo} alt="" />
    </div>
  );
};

export default ConnectEntire;
