import { Link } from "react-router";
import { motion } from "motion/react";

import Homefooter from "../../src/assets/homefooter.png";
const DigitalWorld = () => {
  return (
    <div className="">
      <div className="bg-[url('../../src/assets/blueSlideiBgimg.png')] p-10 py-19.5 bg-no-repeat text-white bg-center  ">
        <div className=" w-[90%] mx-auto sm:w-[80%] md:w-[600px]">
          <motion.h1
            initial={{ x: 50, letterSpacing: "5px", opacity: 0 }}
            animate={{
              x: 0,
              letterSpacing: "0px",
              opacity: 1,
              transition: { duration: 2 },
            }}
            className="text-[25px] md:text-[30px] lg:text-[41px] lg:leading-13 md:leading-10 text-center"
          >
            Protect Your Digital World Try Our Password Manager Now!
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 2 },
            }}
            className="my-5 text-center"
          >
            In today’s digital age, keeping your online accounts safe is more
            crucial than ever. Our password manager offers and solution
            safeguard your sensitive information.
          </motion.p>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            className="my-6 "
          >
            <Link
              className="py-3.5 hover:text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] bg-white text-black"
              to=""
            >
              Manage Your Password
            </Link>
          </motion.button>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            className="my-6 "
          >
            <Link
              className="py-3.5 hover:text-[#383873] px-6 text-lg underline text-white text-[14px] font-semibold"
              to=""
            >
              TRY FOR FREE NOW
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DigitalWorld;
