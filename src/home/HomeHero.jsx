import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

import "../features/Navber.css";
import MainSpan from "../../src/assets/main-span8.png";
import Hero8main from "../../src/assets/hero8-main-image.png";

const HomeHero = () => {
  return (
    <div className="bg-[#F8F9FE] rounded-br-[60%] rounded-bl-[20%] lg:pt-5 ">
      <div className="lg:bg-[url('../../src/assets/hero8-bg-shape.png')] bg-top-right  bg-no-repeat   md:gap-10 lg:gap-32 lg:flex    px-5 md:pl-10 lg:pl-20 items-center ">
        <div className=" pt-10 lg:w-[70%] lg:pt-0 lg:mt-16 ">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className="inline-block  bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5  max-lg:text-center "
          >
            <img className="inline-block mr-3" src={MainSpan} alt="" />
            <p className="inline-block text-[#8F51F5]">
              Top Choice For 5,800+ Websites Worldwide
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "2px" }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
              letterSpacing: "0px",
            }}
            className="text-[40px] leading-18 sm:text-[50px] md:text-[55px]  font-semibold"
          >
            Password Manager Trusted By Millions
          </motion.h1>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
            className="text-[#554F5F] tracking-wide text-[17px] pt-5 pb-5"
          >
            Protect more than your passwords with intuitive credential
            management for your whole organization. Set, forget, and trust eSoft
            to secure your people data against breaches.
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <button className="mybtn">
              <Link className="child" to="">
                Manage Your Password
              </Link>
            </button>
            <Link
              className="ml-5 font-semibold max-sm:my-3 max-sm:block text-[15px] underline hover:text-blue-600 transition duration-300 ease-in-out"
              to=""
            >
              TRY FOR FREE
            </Link>
          </motion.div>
        </div>

        <div className=" ">
          <motion.img
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1, transition: { duration: 0.6 } }}
            className=""
            src={Hero8main}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
