import React from "react";
import {
  FaRegCalendarAlt,
  FaGooglePlusG,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { TbMessageHeart } from "react-icons/tb";
import { FaCheck, FaFacebookF } from "react-icons/fa6";

import Img1 from "../../../src/assets/10056.png";
import Comment from "../../../src/assets/comment.png";
import Massanger from "../../../src/assets/massanger.png";
import Img2 from "../../../src/assets/img2.png";
const EmailMarketing = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <div>
        <img className="w-full" src={Img1} alt="" />
        <div className="sm:flex max-md:mx-3  items-center justify-between my-5">
          <button className="inline-block mb-5 bg-[#0404f118] px-3 py-1.5 rounded-lg">
            #Email Marketing
          </button>
          <div className="sm:flex max-md:mx-3 mb-5 inline-block items-center gap-2 text-[18px] text-[#554F5F] border-x-2 sm:px-5">
            <FaRegCalendarAlt className=" inline-block mr-3" />
            <p className=" inline-block">10 October 2023 </p>
          </div>
          <div className="sm:flex max-md:mx-3 mb-5 inline-block items-center gap-2 text-[18px] text-[#554F5F] ">
            <TbMessageHeart className=" inline-block mr-3" />
            <p className=" inline-block">10 October 2023</p>
          </div>
        </div>
        <h1 className="text-[40px] font-[500] leading-14">
          Best Masterful Email Marketing Starts Here: Introducing eSoft
        </h1>
        <p className="my-5 text-[17px] text-[#554F5F]">
          Email marketing, where brilliance meets innovation. At Your SaaS Name,
          we're on an mission to transform the way you connect with your
          audience. Unleash the power of personalised, high-converting campaigns
          with our intuitive drag-and-drop editor.
        </p>
        <p className=" mb-5 text-[17px] text-[#554F5F]">
          Unleash the power of personalised, high-converting campaigns with our
          intuitive an drag-and-drop editor, smart segmentation, and powerful
          automation tools. Crafting emails that resonate has never been easier.
          Join a best community of marketers.
        </p>
        <div className="w-full h-0.5 bg-[#ddd] my-10"></div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            <img src={Img2} alt="" />
            <img src={Img2} alt="" />
          </div>
          <h1 className="text-[32px] font-[500] leading-10 mt-5">
            Crafting Success: Your Email Marketing Email Brilliance Unleashed:
            Elevate Solution -eSoft
          </h1>
          <p className="my-5 text-[17px] text-[#554F5F]">
            Small business, or enterprise, eSoft has a plan tailored to your
            needs. Don't miss out on the email marketing revolution – sign up
            for a free trial today and experience the magic of Your SaaS Name.
            Engage, convert, succeed – your journey starts here.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <ul>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>Increased Organic Traffic</p>
            </li>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>In-Depth Analytics Dashboard</p>
            </li>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>Content Optimization Tools</p>
            </li>
          </ul>
          <ul>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>Regular Performance Monitoring</p>
            </li>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>Responsive Design for Any Device</p>
            </li>
            <li className="flex gap-3 items-center text-[17px]  my-4">
              <div className="bg-[#0d02d617] p-1 rounded-full">
                <FaCheck className="text-blue-500 " />
              </div>
              <p>Improved Search Engine Rankings</p>
            </li>
          </ul>
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mb-10 mt-5"></div>
        <h1 className="text-[32px] font-[500] leading-10 mt-5">
          Beyond the Inbox: Marketing Redefines Email Efficiency & Meets
          Innovation Strategies
        </h1>
        <p className="my-5 text-[17px] text-[#554F5F]">
          Our platform goes beyond the inbox, offering a seamless and efficient
          experience. See your campaigns come to life with our analytics
          dashboard, providing data-driven insights for informed decisions.
          Whether you're a startup, small business.
        </p>
        <div className="bg-white p-7 rounded-lg italic text-[17px] font-[500]">
          <p>
            “Transforming the ordinary into the extraordinary, eSoft is more
            than just an email marketing platform; it's your gateway to and
            impactful communication. Craft, target, automate, and analyse with
            ease, ensuring every email resonates.”
          </p>
          <div className="flex justify-end">
            <img className=" " src={Comment} alt="" />
          </div>
        </div>
        <h1 className="text-[32px] font-[500] leading-10 mt-5">
          Crafting Success: Your Email Marketing Email Brilliance Unleashed
          Elevate Solution -eSoft
        </h1>
        <p className="my-5 text-[17px] text-[#554F5F]">
          Small business, or enterprise, eSoft has a plan tailored to your
          needs. Don't miss out on the email marketing revolution – sign up for
          a free trial today and experience the magic of Your SaaS Name. Engage,
          convert, succeed – your journey starts here.
        </p>
        <div className="w-full h-0.5 bg-[#ddd] mb-10 mt-5"></div>
        <div className="sm:flex max-md:mx-3  items-center justify-between my-5">
          <button className="inline-block mb-5 bg-[#0404f118] px-3 py-1.5 rounded-lg">
            #Email Marketing
          </button>
          <div className="sm:flex max-md:mx-3 mb-5 inline-block items-center gap-2 text-[18px]  border-x-2 sm:px-5">
            <TbMessageHeart className=" inline-block mr-3" />
            <p className=" inline-block">10 October 2023 </p>
          </div>
          <div className="sm:flex max-md:mx-3 mb-5 inline-block items-center gap-2 text-[18px] text-[blue] ">
            <div className="bg-[#1c09e322] inline-block p-2 rounded-full mx-1 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-[#1c09e322] inline-block p-2 rounded-full mx-1 cursor-pointer">
              <FaGooglePlusG className="" />
            </div>
            <div className="bg-[#1c09e322] inline-block p-2 rounded-full mx-1 cursor-pointer">
              <FaLinkedinIn className="" />
            </div>
            <div className="bg-[#1c09e322] inline-block p-2 rounded-full mx-1 cursor-pointer">
              <FaYoutube className="" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 bg-blue-500 p-5 rounded-md text-white">
          <img className="bg-white p-3 rounded-md" src={Massanger} alt="" />
          <p>
            Questions? Comments? Visit Our{" "}
            <strong className="underline cursor-pointer">Help Center</strong>{" "}
            For Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
