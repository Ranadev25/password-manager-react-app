import React, { useState } from "react";
import { motion } from "motion/react";

const HowItWorks = () => {
  const [background, setbackground] = useState(1);

  const hendelOneclick = (id) => {
    setbackground(id);
  };
  const hendelTowclick = (id) => {
    setbackground(id);
  };
  const hendelThreeclick = (id) => {
    setbackground(id);
  };
  return (
    <div className="mt-42">
      <div className="max-w-[400px] mx-auto text-center">
        <button className="bg-[#ECE5FE] text-blue-500 py-1 px-5 rounded-3xl ">
          How It Work
        </button>
        <h1 className="text-4xl font-semibold my-5">
          Next-Level Email Strategies
        </h1>
      </div>

      <div className="w-[95%]  my-10 sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex items-center justify-center">
        <div
          onClick={() => hendelOneclick(1)}
          className={`w-12 h-12 cursor-pointer rounded-full  flex justify-center items-center ${
            background == 1 ? "bg-blue-500 text-white " : "bg-[#0719e11a] "
          }`}
        >
          1
        </div>

        <div className="w-[38%] max-sm:w-[30%] flex  h-1 bg-[#1e1e1e1f]"></div>

        <div
          onClick={() => hendelTowclick(2)}
          className={`w-12 h-12 cursor-pointer rounded-full  flex justify-center items-center ${
            background == 2 ? "bg-blue-500 text-white " : "bg-[#0719e11a] "
          }`}
        >
          2
        </div>

        <div className="w-[38%] max-sm:w-[30%] flex  h-1 bg-[#1e1e1e1f]"></div>

        <div
          onClick={() => hendelThreeclick(3)}
          className={`w-12 cursor-pointer h-12 rounded-full  flex justify-center items-center ${
            background == 3 ? "bg-blue-500 text-white " : "bg-[#0719e11a] "
          }`}
        >
          3
        </div>
      </div>

      <motion.div
        key={background}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`grid  ${
          background == 1 || background == 2 || background == 3
            ? "mt-0"
            : "mt-20"
        }  grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-[90%] mx-auto lg:grid-cols-3 `}
      >
        <div>
          <h1 className="text-[22px] font-semibold my-5 text-center">
            Create Engaging Campaigns
          </h1>
          <img src="../../../../src/assets/work2-img1.png" alt="" />
        </div>
        <div>
          <h1 className="text-[22px] font-semibold my-5 text-center">
            Automate Workflows
          </h1>
          <img src="../../../../src/assets/work2-img2.png" alt="" />
        </div>
        <div>
          <h1 className="text-[22px] font-semibold my-5 text-center">
            Grow Your Reach
          </h1>
          <img src="../../../../src/assets/work2-img3.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
