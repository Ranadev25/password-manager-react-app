import React from "react";
import { Link } from "react-router";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
const PricingPlan = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 pb-20 pt-5 mt-18 bg-[#F8F9FE]">
      <div>
        <div className="sm:w-[70%] md:w-[60%]  mx-auto text-center mb-10">
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
              Pricing Plan
            </p>
          </motion.div>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className="text-[43px] font-semibold"
          >
            Choose The Plan That Best Suits Your Needs
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-5 gap-5 ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
          className="bg-white p-5 rounded"
        >
          <h1 className="text-xl text-[#7D2EFE]">FREE</h1>
          <p className="text-[14px] text-[#554F5F] my-5">
            Reliable, secure and intuitive password management for 1 type of all
            device.
          </p>
          <p>
            <span className="text-[40px] font-semibold">$0 </span>{" "}
            <span className="font-semibold">/ All Time Free</span>
          </p>

          <button className="my-6 w-[95%] py-3.5 mx-auto text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]">
            <Link className="  " to="">
              TRY FOR FREE NOW
            </Link>
          </button>

          <ul className="mt-10 text-[16px]">
            {/*========== 1st list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px] " />
              </span>
              <span>No Password Limit</span>
            </li>

            {/*========== 2nd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Password Generator</span>
            </li>

            {/*========== 3rd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>One 1 User Account</span>
            </li>

            {/*========== 4th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Access 1 Type Devices</span>
            </li>

            {/*========== 5th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Sharing With 1 Person</span>
            </li>

            {/*========== 6th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Save & Autofill Password</span>
            </li>

            {/*========== 7th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Login Within Password</span>
            </li>

            {/*========== 8th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Strong Security Panel</span>
            </li>

            {/*========== 9th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Dark Web Monitoring</span>
            </li>

            {/*========== 10th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 Premium Account</span>
            </li>

            {/*========== 11th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 GB File Storages</span>
            </li>

            {/*========== 12th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Sharing Multiple People</span>
            </li>

            {/*========== 13th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Access Of All Devices</span>
            </li>

            {/*========== 14th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>All Type Emergency Access</span>
            </li>

            {/*========== 15th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Grouping & Sharing Folders</span>
            </li>

            {/*========== 16th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>User Management Security</span>
            </li>
          </ul>
        </motion.div>

        {/* ==========seacend list item=============== */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="bg-white p-5 rounded"
        >
          <h1 className="text-xl text-[#7D2EFE]">PREMIUM</h1>
          <p className="text-[14px] text-[#554F5F] my-5">
            Advanced password management and enhanced security from all your
            devices.
          </p>
          <p>
            <span className="text-[40px] font-semibold">$2.40 </span>{" "}
            <span className="font-semibold">/ For 1 Month</span>
          </p>

          <button className="my-6 w-[95%] py-3.5 mx-auto text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]">
            <Link to="">START YOUR 30-DAYS TRIAL</Link>
          </button>

          <ul className="mt-10 text-[16px]">
            {/*========== 1st list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px] " />
              </span>
              <span>No Password Limit</span>
            </li>

            {/*========== 2nd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Password Generator</span>
            </li>

            {/*========== 3rd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>One 1 User Account</span>
            </li>

            {/*========== 4th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Access 1 Type Devices</span>
            </li>

            {/*========== 5th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Sharing With 1 Person</span>
            </li>

            {/*========== 6th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Save & Autofill Password</span>
            </li>

            {/*========== 7th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Login Within Password</span>
            </li>

            {/*========== 8th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Strong Security Panel</span>
            </li>

            {/*========== 9th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Dark Web Monitoring</span>
            </li>

            {/*========== 10th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 Premium Account</span>
            </li>

            {/*========== 11th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 GB File Storages</span>
            </li>

            {/*========== 12th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Sharing Multiple People</span>
            </li>

            {/*========== 13th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Access Of All Devices</span>
            </li>

            {/*========== 14th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>All Type Emergency Access</span>
            </li>

            {/*========== 15th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Grouping & Sharing Folders</span>
            </li>

            {/*========== 16th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>User Management Security</span>
            </li>
          </ul>
        </motion.div>

        {/* ===========last list item============ */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          className="bg-white p-5 rounded"
        >
          <h1 className="text-xl text-[#7D2EFE]">BUSINESS</h1>
          <p className="text-[14px] text-[#554F5F] my-5">
            Secure password management for up to 6 users easy, unlimited
            password sharing.
          </p>
          <p>
            <span className="text-[40px] font-semibold">$6.99 </span>{" "}
            <span className="font-semibold">/ For 1 Yearly</span>
          </p>

          <button className="my-6 w-[95%] py-3.5 mx-auto text-lg rounded-lg border-b-4 border-blue-900 transition duration-500 ease-in-out bg-gradient-to-r hover:from-[#D227F7] hover:to-[#712EFE] from-[#712EFE] to-[#D227F7]">
            <Link to="">START YOUR 30-DAYS TRIAL</Link>
          </button>

          <ul className="mt-10 text-[16px]">
            {/*========== 1st list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px] " />
              </span>
              <span>No Password Limit</span>
            </li>

            {/*========== 2nd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Password Generator</span>
            </li>

            {/*========== 3rd list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>One 1 User Account</span>
            </li>

            {/*========== 4th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Access 1 Type Devices</span>
            </li>

            {/*========== 5th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Sharing With 1 Person</span>
            </li>

            {/*========== 6th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Save & Autofill Password</span>
            </li>

            {/*========== 7th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Login Within Password</span>
            </li>

            {/*========== 8th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Strong Security Panel</span>
            </li>

            {/*========== 9th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-[#7D2EFE] rounded-full mr-3">
                <FaCheck className="inline-block text-[12px]" />
              </span>
              <span>Dark Web Monitoring</span>
            </li>

            {/*========== 10th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5  bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 Premium Account</span>
            </li>

            {/*========== 11th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>1 GB File Storages</span>
            </li>

            {/*========== 12th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Sharing Multiple People</span>
            </li>

            {/*========== 13th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Access Of All Devices</span>
            </li>

            {/*========== 14th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>All Type Emergency Access</span>
            </li>

            {/*========== 15th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>Grouping & Sharing Folders</span>
            </li>

            {/*========== 16th list======== */}
            <li className="flex items-center mb-2">
              <span className="text-white px-1.5 bg-gradient-to-r from-[#712EFE] to-[#D227F7] rounded-full mr-3">
                <RxCross2 className="inline-block text-[12px]" />
              </span>
              <span>User Management Security</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlan;
