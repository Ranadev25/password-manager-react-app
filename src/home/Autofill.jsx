import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import App8bg from "../../src/assets/apps8-bg-shape.png";
import Autofill from "../../src/assets/autofill-img.png";
const Autofills = () => {
  return (
    <div className="md:flex px-5 md:px-10 lg:px-20 gap-10 relative overflow-hidden">
      <div className="bg-[#F8F9FE] max-lg:hidden lg:absolute  w-full h-[900px] z-10 rounded-full top-[-50%] right-[-10%]"></div>
      <div className="md:w-[50%] relative z-20 mt-20">
        <div>
          <img src={App8bg} />
          <img className=" absolute top-18 right-0 " src={Autofill} alt="" />
        </div>
      </div>
      <div className="md:w-[50%] max-md:mt-10 z-20 mt-20">
        <div className="z-20 max-lg:mb-10 p-3 lg:p-10">
          <motion.div
            initial={{ x: 100, scale: 0 }}
            whileInView={{ x: 0, scale: 1, transition: { duration: 1 } }}
            className="inline-block   bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5 max-lg:text-center "
          >
            <img className="inline-block mr-3" src={MainSpan} alt="" />
            <p className="inline-block bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
              Autofill Your Password
            </p>
          </motion.div>

          <motion.h1
            initial={{ x: 100, letterSpacing: "2px" }}
            animate={{
              x: 0,
              letterSpacing: "0px",
              transition: { duration: 1 },
            }}
            className="text-[40px] leading-14 font-semibold"
          >
            Autofill Your Password
          </motion.h1>
          <motion.p
            initial={{ x: 80 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="py-5 text-[15px] text-[#554F5F]"
          >
            Managing your passwords shouldn't be a hassle. Our password manager
            simplifies your online experience by securely storing an autofilling
            your passwords, so you never have to remember or reset them again.
            With advance intuitive best digital life.
          </motion.p>
          <motion.button
            initial={{ x: 100 }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="my-6 "
          >
            <Link
              className="py-3.5 text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]"
              to=""
            >
              try for free Now
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Autofills;
