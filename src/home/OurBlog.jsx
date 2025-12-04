import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import Image1 from "../../src/assets/blog8-img1.png";
import Image2 from "../../src/assets/blog8-img2.png";
import Image3 from "../../src/assets/blog8-img3.png";
const OurBlog = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 ">
      <div>
        <div className="sm:w-[70%] md:w-[60%]  mx-auto text-center my-10">
          <motion.div
            initial={{ x: 100, scale: 0, opacity: 0 }}
            whileInView={{
              x: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 1 },
            }}
            className="inline-block   bg-[#ECE5FE] py-1.5 rounded-md px-3 text-[16px] font-semibold text-blue-600 my-5 max-lg:text-center "
          >
            <img className="inline-block mr-3" src={MainSpan} alt="" />
            <p className="inline-block bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
              Our Blog
            </p>
          </motion.div>

          <motion.p
            initial={{ x: 50, letterSpacing: "2px", opacity: 0 }}
            whileInView={{
              x: 0,
              letterSpacing: "0px",
              opacity: 1,
              transition: { duration: 1 },
            }}
            className="text-[43px] font-semibold"
          >
            eSoft Pass Latest News
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 ">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="mb-10 shadow-2xl rounded"
        >
          <img className="mx-auto" src={Image1} alt="" />
          <div className="p-6 pt-0">
            <h1 className="bg-gradient-to-r from-[#712EFE] to-[#D227F7] my-4 text-[16px] text-transparent bg-clip-text">
              SECURE PASSWORD
            </h1>
            <Link
              to="/blogs/blog-detailes"
              className=" underline text-[23px] hover:text-blue-600 "
            >
              10 Tips for Creating Strong, Unbreakable Passwords.
            </Link>
            <button className="my-6 mt-8 block">
              <Link
                className="py-3.5 text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]"
                to=""
              >
                READ CASE STUDY
              </Link>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="mb-10 shadow-2xl rounded"
        >
          <img className="mx-auto" src={Image2} alt="" />
          <div className="p-6 pt-0">
            <h1 className="bg-gradient-to-r from-[#712EFE] to-[#D227F7] my-4 text-[16px] text-transparent bg-clip-text">
              DATA PROTECTION
            </h1>
            <Link
              to="/blogs/blog-detailes"
              className=" underline text-[23px] hover:text-blue-600 "
            >
              Protecting Your Data from Breaches: Best Practices.
            </Link>
            <button className="my-6 mt-8 block">
              <Link
                className="py-3.5 text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]"
                to="/blogs/blog-detailes"
              >
                READ CASE STUDY
              </Link>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="mb-10 shadow-2xl rounded"
        >
          <img className="mx-auto" src={Image3} alt="" />
          <div className="p-6 pt-0">
            <h1 className="bg-gradient-to-r from-[#712EFE] to-[#D227F7] my-4 text-[16px] text-transparent bg-clip-text">
              CYBER THREATS
            </h1>
            <Link to="" className=" underline text-[23px] hover:text-blue-600 ">
              How to Recognize and Avoid Password Phishing Scams.
            </Link>
            <button className="my-6 mt-8 block">
              <Link
                className="py-3.5 text-white px-6 text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]"
                to="/blogs/blog-detailes"
              >
                READ CASE STUDY
              </Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurBlog;
