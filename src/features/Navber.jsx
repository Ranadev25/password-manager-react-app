import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

import headerLogo2 from "../../src/assets/header-Logo8.png";
import "./Navber.css";
import Demo1 from "../../src/assets/demo1.jpg";
import Demo2 from "../../src/assets/demo2.jpg";
import Demo3 from "../../src/assets/demo3.jpg";
import Demo4 from "../../src/assets/demo4.jpg";
import Demo5 from "../../src/assets/demo5.jpg";
import Demo6 from "../../src/assets/demo6.jpg";
import Demo7 from "../../src/assets/demo7.jpg";
import Demo8 from "../../src/assets/demo8.jpg";
import Demo9 from "../../src/assets/demo9.jpg";
import Demo10 from "../../src/assets/rtl.png";
import Mobile_menu from "./Mobile_menu";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" shadow sticky top-0 z-50   bg-gradient-to-r from-[#712EFE] to-[#D227F7] pt-2 ">
      <nav className="flex px-5 relative md:px-10 lg:px-20 justify-between z-50 items-center text-lg bg-white ">
        <img className="py-3" src={headerLogo2} alt="" />

        {/* toggle menu icon */}
        <div onClick={() => setMenuOpen(true)} className="lg:hidden text-3xl">
          <RiMenu3Fill />
        </div>

        {/* navigation menu for larg scrien */}
        <ul className="flex text-[17px] justify-center items-center md:gap-5 max-lg:hidden">
          {/* naveMenu Number one */}
          <li className="homemenu ">
            <div className="">
              <Link to="/">Home</Link>
              <IoIosArrowDown className="inline-block ml-1 " />
            </div>
            <ul className="otherweb h-[100vh]  overflow-scroll z-10 grid grid-cols-5 bg-white">
              {/* home 1st webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo1}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>01.</span>
                  <span> Web Page Builder</span>
                </div>
              </li>

              {/* home 2nd webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo2}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>02.</span>
                  <span>Time Tracker</span>
                </div>
              </li>

              {/* home 3rd webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo3}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>03.</span>
                  <span>POS Software</span>
                </div>
              </li>

              {/* home 4th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo4}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>04.</span>
                  <span> Password Manager</span>
                </div>
              </li>

              {/* home 5th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo5}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>05.</span>
                  <span> HR Software</span>
                </div>
              </li>

              {/* home 6th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo6}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>06.</span>
                  <span> Email Marketing</span>
                </div>
              </li>

              {/* home 7th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo7}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>07.</span>
                  <span> Project Management</span>
                </div>
              </li>

              {/* home 8th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo8}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>08.</span>
                  <span> SEO Software</span>
                </div>
              </li>

              {/* home 9th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo9}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>09.</span>
                  <span> Social Media</span>
                </div>
              </li>

              {/* home 10th webpage */}
              <li className=" m-2 inline-block relative text-center mb-4">
                <img
                  className=" rounded-sm max-h-[300px] min-h-[300px]  inline-block mb-2"
                  src={Demo10}
                  alt=""
                />
                <div className="flex  absolute w-full mx-auto  opacity-0 top-0 scale-80 hover:scale-100 hover:opacity-100 transition duration-700 ease-in-out  flex-col items-center justify-center rounded-sm    bg-[#22036557]  h-[89%] ">
                  <div className=" h-full w-full buttonparent relative">
                    <div className=" relative w-full  buttonchild">
                      <button className="flex ml-[50%]  bg-[#562ddc] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 translate-x-[-50%] hover:translate-y-[-5px]  treansition duration-500">
                        <span>Multi Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                      <button className="flex bg-[#562ddc] absolute hover:translate-y-[-5px] left-[50%] translate-x-[-50%] w-34 justify-center items-center gap-2 py-2 rounded-md text-white cursor-pointer mb-2 treansition duration-500">
                        <span>One Page</span>
                        <span>
                          <MdArrowOutward />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hover:text-[#562ddc]">
                  <span>10.</span>
                  <span> RTL Version</span>
                </div>
              </li>
            </ul>
          </li>

          {/* naveMenu Number two */}
          <li>
            <Link to="/about">About</Link>
          </li>

          {/* naveMenu Number three */}
          <li className=" relative pagesParents">
            <div className="">
              <span>Pages</span>
              <IoIosArrowDown className="inline-block ml-1 " />
            </div>
            <ul className="text-[16px] pages absolute top-12 leading-10 w-50  border-4 border-[#bccaf72c]  p-3 rounded-lg bg-white">
              <li>
                <Link to="/pages/contract-us">Contract Us</Link>
              </li>
              <li>
                <Link to="/pages/features">Features</Link>
              </li>
              <li>
                <Link to="/pages/testimonial">Tastimonial</Link>
              </li>
              <li>
                <Link to="/pages/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/pages/download">Download</Link>
              </li>
              <li>
                <Link to="*">404</Link>
              </li>
            </ul>
          </li>

          {/* naveMenu Number four */}
          <li className=" relative pagesParents">
            <div>
              <span>Blog</span>
              <IoIosArrowDown className="inline-block ml-1 " />
            </div>
            <ul className=" text-[16px] pages absolute top-12 leading-10 w-50  border-4 border-[#bccaf72c] p-3 rounded-lg bg-white">
              <li>
                <Link to="/blogs/blog">Bloge</Link>
              </li>
              <li>
                <Link to="/blogs/detailes-left">DEtailes Left</Link>
              </li>
              <li>
                <Link to="/blogs/detailes-right">Detailes Right</Link>
              </li>
              <li>
                <Link to="/blogs/blog-detailes">Blog Detailes</Link>
              </li>
            </ul>
          </li>

          {/* naveMenu Number five */}
          <li className=" relative pagesParents">
            <div>
              <span>Account</span>
              <IoIosArrowDown className="inline-block ml-1 " />
            </div>
            <ul className=" text-[16px] pages absolute top-12 leading-10 w-60  border-4 border-[#bccaf72c] bg-white p-3 rounded-lg">
              <li>
                <Link to="/accounts/create-accounts">Create Account</Link>
              </li>
              <li>
                <Link to="/accounts/login">Login</Link>
              </li>
              <li>
                <Link to="/accounts/forget">Forgot</Link>
              </li>
              <li>
                <Link to="/accounts/reset">Reset</Link>
              </li>
              <li>
                <Link to="/accounts/verify-email">Verify Email</Link>
              </li>
              <li>
                <Link to="/accounts/success">Success</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* navigation menu for mubile scrien */}
        <div
          className={`lg:hidden absolute top-0 bg-[#6A5Cff] w-full transition-all duration-500 ease-in-out p-5 text-[17px] ${
            menuOpen ? "left-0 opacity-100" : "left-[-100%] opacity-0"
          }`}
        >
          <Mobile_menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* loging button section */}
        <div className="flex max-lg:hidden gap-5 justify-center items-center">
          <Link
            className=" font-[500] text-[16px] hover:text-blue-500 underline "
            to="/accounts/login"
          >
            LOG IN
          </Link>
          <button className=" mybtn">
            <Link className=" child" to="/about">
              GET FREE TRIAL
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
