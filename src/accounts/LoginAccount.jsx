import React from "react";
import { Link } from "react-router";
import { GrGoogle } from "react-icons/gr";
import { FaApple } from "react-icons/fa";

import "../about/aboutComponent/AboutHero.css";
const CreatAccount = () => {
  return (
    <div className="pb-10">
      <div className="bg-white  p-7 rounded-lg">
        <h1 className="text-center  text-[40px] sm:text-[65px] leading-18 font-[400]">
          Log In
        </h1>
        <p className="text-center text-[17px] text-[#554F5F] my-5 ">
          Please fill your email and password to sign in.
        </p>
        <form>
          <div className="">
            <div className="w-full">
              <label className="text-[20px] font-[500]" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-[#F8F9FE] mt-2 mb-3 px-3 py-4 rounded-full"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <label className="text-[20px] font-[500]" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="w-full bg-[#F8F9FE] mt-2 mb-3 px-3 py-4 rounded-full"
          />
          <button type="submit" className="my-6 py-3.5 w-full singinbutton ">
            <Link className=" " to="">
              <span className="">Log In</span>
            </Link>
          </button>
        </form>
        <div className=" text-[18px] font-[400]">
          <label htmlFor="radio">Don’t have an account?</label>
          <Link to="" className="text-blue-500 underline">
            Sing up today Fotget password
          </Link>
          <button className="block w-full my-5 rounded-full py-3.5 bg-[#F8F9FE] text-center text-xl">
            <GrGoogle className="inline-block  mr-3" />
            <Link to="" className="text-[18px] font-[500]">
              Sing in with Google
            </Link>
          </button>
          <button className="block w-full my-5 rounded-full py-3.5 bg-[#F8F9FE] text-center text-xl">
            <FaApple className="inline-block  mr-3" />
            <Link to="" className="text-[18px] font-[500]">
              Sing in with Apple
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatAccount;
