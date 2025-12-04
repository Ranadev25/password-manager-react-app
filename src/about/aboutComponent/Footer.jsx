import React from "react";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Logoimg1 from "../../../src/assets/footer-icon1.png";
import Logoimg2 from "../../../src/assets/footer-icon2.png";
import Logoimg3 from "../../../src/assets/footer-icon3.png";
import headerLogo4 from "../../../src/assets/header-logo2.png";

const Footer = () => {
  return (
    <div className="bg-[url('../../../src/assets/footer2-shape.png')] bg-bottom-right bg-no-repeat">
      <div className="bg-[url('../../../src/assets/footer2-shape2.png')] bg-no-repeat bg-left">
        <div className="mx-auto w-[95%] max-md:mt-20 sm:w-[90%] md:w-[85%] lg:w-[90%] border-b border-[#827b7b7a] text-[17px]">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center border-b border-[#7c707070] gap-2 ">
            <div className=" flex items-center gap-3 my-5 md:my-12 border-r-2 border-[#dddddd7d]">
              <img className="filter invert" src={Logoimg1} alt="" />
              <h1 className="font-semibold">Free training & 24-hours</h1>
            </div>
            <div className=" flex items-center gap-3  border-r-2 border-[#dddddd7d] md:my-12">
              <img className="filter invert" src={Logoimg2} alt="" />
              <h1 className="font-semibold">
                Serious about security & privacy
              </h1>
            </div>
            <div className="max-md:pb-8 flex items-center gap-3 my-5 md:my-12">
              <img className="filter invert" src={Logoimg3} alt="" />
              <h1 className="font-semibold">
                Highest levels of uptime the last 12 months
              </h1>
            </div>
          </div>
          <div>
            <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 ">
              {/*============= first list=========== */}
              <ul className="text-[#4E4D61] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Product
                </h2>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Pricing
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-14"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Integration
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-24"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Features
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-18"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Templates
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-20"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Changelog
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-22"></span>
                </li>
              </ul>

              {/*=============== 2nd list ===========*/}
              <ul className="text-[#4E4D61] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Support
                </h2>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    On-boarding
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-24"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Help center
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-22"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Contact us
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-22"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Experts
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-15"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Status
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-14"></span>
                </li>
              </ul>

              {/* ===========3rd list============ */}
              <ul className="text-[#4E4D61] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Resources
                </h2>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Community
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-22"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Affiliates
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-18"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Partnerships
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-25"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Perks & Benefits
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-32"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Api docs
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-18"></span>
                </li>
              </ul>

              {/*============= 4th list================== */}
              <ul className="text-[#4E4D61] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Company
                </h2>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    About
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-12"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Our blog
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-16"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    In the press
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-24"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Brand assets
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-26"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Work with us
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-26"></span>
                </li>
              </ul>

              {/*=========== 5th list================ */}
              <ul className="text-[#4E4D61] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Download
                </h2>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    iPhone & iPad
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-28"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    Android
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-16"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500  transition duration-500 ease-in-out"
                    to=""
                  >
                    MacOS
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-14"></span>
                </li>
                <li className="relative group mb-4">
                  <Link
                    className="hover:text-blue-500 transition duration-500 ease-in-out"
                    to=""
                  >
                    Window
                  </Link>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-16"></span>
                </li>
              </ul>

              {/* ========6th list========= */}
              <ul className="text-[#4E4D61] lg:w-[] text-[18px] mt-10">
                <h2 className="text-xl font-semibold text-black pb-7">
                  Social Links
                </h2>
                <div className="flex gap-3">
                  <li className="text-black bg-[#ECE9FE] w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out">
                    <Link to="">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="text-black bg-[#ECE9FE] w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out">
                    <Link to="">
                      <FaXTwitter />
                    </Link>
                  </li>

                  <li className="text-black bg-[#ECE9FE] w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out">
                    <Link to="">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li className="text-black bg-[#ECE9FE] w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out">
                    <Link to="">
                      <IoLogoInstagram />
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between items-center mx-auto w-[95%] max-md:mt-20 sm:w-[90%] py-3 md:w-[85%] lg:w-[90%] text-[17px] text-[#4E4D61]">
        <div>
          <img src={headerLogo4} alt="" />
        </div>
        <div className="sm:flex gap-3 my-5 leading-5 max-sm:leading-10">
          <p className=" sm:border-r-2 pr-3 border-[#4e4d6197]">@2025 eSoft</p>
          <p className=" sm:border-r-2 pr-3 border-[#4e4d6197]">Security</p>
          <p className=" sm:border-r-2 pr-3 border-[#4e4d6197]">Your Privacy</p>
          <p className=" pr-10 ">Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
