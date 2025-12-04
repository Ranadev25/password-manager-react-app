import { Link } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import "../../about/aboutComponent/AboutHero.css";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import AppsShape1 from "../../../src/assets/apps-shape1.png";
import AppsShape2 from "../../../src/assets/apps-shape2.png";
const Costomer = () => {
  const collnumber = () => {
    alert("this Number is Not used");
  };
  return (
    <div className="bg-[url('../../../src/assets/apps-shape2.png')]  relative bg-no-repeat ">
      <div className="bg-[url('../../../src/assets/apps-shape1.png')] bg-no-repeat bg-top-right bg-blend-multiply">
        <div className=" absolute top-0 left-0 inset-0 bg-white/60"></div>

        <div className="">
          <div className="w-[95%] sm:w-[90%] md:w-[70%] mx-auto lg:w-[60%] text-center relative z-10 ">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-7xl  pt-26">
              Customer Support
            </h1>
            <p className="text-[18px] mt-5 text-[#554F5F] pb-10">
              At eSoft, we value your inquiries and are here to provide the
              support you need. Whether you're looking for more information
              about our cutting-edge software.
            </p>
          </div>

          <div className="bg-[#F5F8FF]">
            <div className="lg:flex gap-10  bg-white mx-5 sm:mx-10 md:mx-20 p-3 sm:p-10 md:p-10 rounded-md z-10 relative shadow-2xl ">
              <div className="lg:w-[60%]">
                <h1 className="text-2xl font-semibold">Send us a Message</h1>
                <p className="text-[17px] py-5 text-[#554F5F]">
                  As a fellow small business owner, we know the fulfillment that
                  an a comes from running your own business contact to Financy.
                </p>
                <form className="clear-both" action="">
                  <div className="md:flex gap-5">
                    <input
                      className="bg-[#F5F8FE] w-full md:w-[50%] py-4 px-3 outline-0 my-2 rounded-md"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Firt Name *"
                    />
                    <input
                      className="bg-[#F5F8FE] w-full md:w-[50%] py-4 px-3 outline-0 my-2 rounded-md"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="md:flex gap-5">
                    <input
                      className="bg-[#F5F8FE] w-full md:w-[50%] py-4 px-3 outline-0 my-2 rounded-md"
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Phone*"
                    />
                    <input
                      className="bg-[#F5F8FE] w-full md:w-[50%] py-4 px-3 outline-0 my-2 rounded-md"
                      type="text"
                      name="web"
                      id="web"
                      placeholder="Website*"
                    />
                  </div>
                  <textarea
                    className="w-full bg-[#F5F8FE] my-2 p-3 rounded-md outline-0"
                    name="nessage"
                    id="message"
                    placeholder="Your Message*"
                    cols="40"
                    rows="4"
                  ></textarea>
                  <button type="submite" className="my-6 float-right ">
                    <Link className="py-3.5 px-5 singinbtn " to="">
                      <span className="">Submit Now</span>
                    </Link>
                  </button>
                </form>
              </div>
              <div className="lg:w-[40%] max-lg:mt-24">
                <div className="flex  gap-4 leading-9 items-center mt-7 bg-[#F5F8FE] p-5">
                  <div className="text-white bg-[#2523b931] text-4xl p-2 rounded-full">
                    <FiPhoneCall />
                  </div>
                  <div className="text-[18px]">
                    <p className="font-semibold"> Call</p>
                    <Link
                      className="text-[#554F5F] hover:text-blue-500"
                      onClick={collnumber}
                      to=""
                    >
                      281-789-6642
                    </Link>
                  </div>
                </div>

                <div className="flex  gap-4 leading-9 items-center  mt-7 bg-[#F5F8FE] p-5">
                  <div className="text-white bg-[#2523b931] text-4xl p-2 rounded-full">
                    <MdOutlineMail />
                  </div>
                  <div className="text-[18px]">
                    <p className="font-semibold"> Email</p>
                    <Link
                      className="text-[#554F5F] hover:text-blue-500"
                      onClick={collnumber}
                      to=""
                    >
                      info@activatedigitalmedia.com
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4 leading-9 items-center mt-7 bg-[#F5F8FE] p-5">
                  <div className="text-white bg-[#2523b931] text-4xl p-2 rounded-full">
                    <FaRegClock />
                  </div>
                  <div className="text-[18px]">
                    <p className="font-semibold">Schedule Time</p>
                    <Link
                      className="text-[#554F5F] hover:text-blue-500"
                      onClick={collnumber}
                      to=""
                    >
                      Mon - Fri: 10am to 5pm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costomer;
