import React from "react";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import BoxShape1 from "../../src/assets/work7-box-shape1.png";
import BoxShape2 from "../../src/assets/work7-box-shape.png";
import IconShape1 from "../../src/assets/work7-icon1.svg";
import IconShape2 from "../../src/assets/work7-icon2.svg";
import IconShape3 from "../../src/assets/work7-icon3.svg";
const HowItWorks = () => {
  return (
    <div className="mt-20 px-5 md:px-10 lg:px-20">
      <div className="sm:w-[70%] md:w-[60%]  mx-auto text-center">
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          className="inline-block   bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5 max-lg:text-center "
        >
          <img className="inline-block mr-3" src={MainSpan} alt="" />
          <p className="inline-block bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
            How It Works
          </p>
        </motion.div>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="text-[43px] font-semibold"
        >
          Process Of Password Save
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20 mt-16 relative lg:mx-10 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          className="text-center mb-10"
        >
          <img
            className=" bg-gradient-to-r from-[#712EFE] to-[#D227F7] p-4 rounded-full mx-auto"
            src={IconShape3}
            alt=""
          />
          <h1 className="text-lg font-semibold my-4">Quick Registration</h1>
          <p className="text-[#554F5F] text-[15px]">
            Sign up and get started immediately with our straightforward
            application
          </p>
        </motion.div>

        <img
          className=" max-lg:hidden absolute top-[32%] translate-y-[-50%] transform scale-y-[-1] right-56"
          src={BoxShape1}
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          className="text-center mb-10"
        >
          <img
            className=" bg-gradient-to-r from-[#712EFE] to-[#D227F7] p-4 rounded-full mx-auto"
            src={IconShape2}
            alt=""
          />
          <h1 className="text-lg font-semibold my-4">Quick Registration</h1>
          <p className="text-[#554F5F] text-[15px]">
            Sign up and get started immediately with our straightforward
            application
          </p>
        </motion.div>

        <img
          className=" max-lg:hidden absolute top-[32%] translate-y-[-50%]  left-50"
          src={BoxShape2}
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          className="text-center mb-10"
        >
          <img
            className=" bg-gradient-to-r from-[#712EFE] to-[#D227F7] p-4 rounded-full mx-auto"
            src={IconShape1}
            alt=""
          />
          <h1 className="text-lg font-semibold my-4">Quick Registration</h1>
          <p className="text-[#554F5F] text-[15px]">
            Sign up and get started immediately with our straightforward
            application
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
