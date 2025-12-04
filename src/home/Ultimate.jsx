import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import Compani from "../../src/assets/apps8-bg-shape.png";
import Compani1 from "../../src/assets/compani8-img.png";
const Ultimate = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 lg:flex mt-20">
      <div className="lg:w-[45%] md:w-[100%] ">
        <motion.div
          initial={{ x: 100, scale: 0 }}
          whileInView={{ x: 0, scale: 1, transition: { duration: 1 } }}
          className="inline-block md:mt-28  bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5 max-lg:text-center "
        >
          <img className="inline-block mr-3" src={MainSpan} alt="" />
          <p className="inline-block bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
            eSoft- Password Management Companies
          </p>
        </motion.div>

        <motion.h1
          initial={{ x: 50, letterSpacing: "3px" }}
          whileInView={{
            x: 0,
            letterSpacing: "0px",
            transition: { duration: 1 },
          }}
          className="text-[40px] font-semibold leading-14"
        >
          Ultimate Of Security for Your Digital Life
        </motion.h1>
        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="text-[#554F5F] py-5"
        >
          Don’t leave your online security to chance. Our state-of-the-art
          password manager offers unparalleled protection for your digital life,
          ensuring that your passwords are have always safe and easily
          accessible. With features designed for both simplicity and security,
          can effortlessly manage.
        </motion.p>
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1.2 },
          }}
          className="my-6 "
        >
          <Link
            className="py-3.5 text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]"
            to=""
          >
            TRY FOR FREE NOW
          </Link>
        </motion.button>
      </div>

      <div className="relative">
        <div className="md:bg-[url('../../src/assets/apps8-bg-shape.png')]  bg-center bg-no-repeat ">
          <img
            className="sm:w-[70%] lg:w-[80%] mx-auto py-20 lg:py-26"
            src={Compani1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Ultimate;
