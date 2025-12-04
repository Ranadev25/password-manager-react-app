import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import App8 from "../../src/assets/apps8.png";

const SecureApps = () => {
  return (
    <div className=" relative mt-20 overflow-hidden lg:flex md:px-10 lg:px-20">
      <div className="bg-[#F8F9FE] max-lg:hidden h-[1000px] rounded-bl-[50%] absolute rounded-br-[50%] top-[-40%] w-full right-[-100px] z-10"></div>
      <div className="lg:w-[63%]  mt-20 bg-[url('../../src/assets/apps8-bg-shape.png')] bg-no-repeat relative z-20 mx-auto">
        <img className="pb-20 z-10" src={App8} alt="" />
      </div>

      <div className="z-10 lg:w-[37%] max-lg:mb-10 mt-32 p-3 lg:p-10">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          className="inline-block   bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5 max-lg:text-center "
        >
          <img className="inline-block mr-3" src={MainSpan} alt="" />
          <p className="inline-block bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
            Secure Apps
          </p>
        </motion.div>

        <motion.h1
          initial={{ x: 30, opacity: 0, letterSpacing: "3px" }}
          whileInView={{
            x: 0,
            opacity: 1,
            letterSpacing: "0px",
            transition: { duration: 1.5 },
          }}
          className="text-[40px] leading-14 font-semibold"
        >
          Secure, Store, and Access with Ease
        </motion.h1>
        <motion.p
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 2 } }}
          className="py-5 text-[15px] text-[#554F5F]"
        >
          Managing your passwords shouldn't be a hassle. Our password manager
          simplifies your online experience by securely storing an autofilling
          your passwords, so you never have to remember or reset them again.
          With advance encryption intuitive desig digital life.
        </motion.p>
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
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
  );
};

export default SecureApps;
