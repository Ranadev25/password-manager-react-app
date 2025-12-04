import { RxCross1 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import HeaderLogo1 from "../../src/assets/header-logo1.png";
import { Link } from "react-router";
import { useState } from "react";

const Mobile_menu = ({ setMenuOpen }) => {
  const [homeopen, setHomeOpen] = useState(false);
  const [multipageopen, setMultiPageOpen] = useState(false);
  const [landingopen, setLandingOpen] = useState(false);
  const [pagesopen, setPagesOpen] = useState(false);
  const [blogopen, setBlogOpen] = useState(false);
  const [accountopen, setAccountOpen] = useState(false);

  return (
    <div className=" text-white ">
      <div className="mb-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <img src={HeaderLogo1} alt="" />
          <RxCross1 onClick={() => setMenuOpen(false)} className="text-3xl" />
        </div>
        <nav>
          <ul className=" leading-11">
            <li>
              <div
                onClick={() => setHomeOpen(!homeopen)}
                className="flex cursor-pointer justify-between items-center"
              >
                <h1>Home</h1>
                <h1 className="text-3xl">{homeopen ? "_" : "+"}</h1>
              </div>
              <div
                className={` cursor-pointer ${homeopen ? "block" : "hidden"}`}
              >
                <div
                  onClick={() => setMultiPageOpen(!multipageopen)}
                  className="flex justify-between items-center ml-5"
                >
                  <h1>Multi Page</h1>
                  <h1 className={`text-3xl`}>{multipageopen ? "_" : "+"}</h1>
                </div>
                <ul className={`ml-8 ${multipageopen ? "block" : "hidden"}`}>
                  <li>
                    <Link to="">Home 1</Link>
                  </li>
                  <li>
                    <Link to="">Home 2</Link>
                  </li>
                  <li>
                    <Link to="">Home 3</Link>
                  </li>
                  <li>
                    <Link to="">Home 4</Link>
                  </li>
                  <li>
                    <Link to="">Home 5</Link>
                  </li>
                  <li>
                    <Link to="">Home 6</Link>
                  </li>
                  <li>
                    <Link to="">Home 7</Link>
                  </li>
                  <li>
                    <Link to="">Home 8</Link>
                  </li>
                  <li>
                    <Link to="">Home 9</Link>
                  </li>
                  <li>
                    <Link to="">RTL</Link>
                  </li>
                </ul>
                <div
                  onClick={() => setLandingOpen(!landingopen)}
                  className="flex cursor-pointer justify-between items-center ml-5"
                >
                  <h1>Landing Page</h1>
                  <h1 className="text-3xl">{landingopen ? "_" : "+"}</h1>
                </div>
                <ul className={`ml-8 ${landingopen ? "block" : "hidden"}`}>
                  <li>
                    <Link to="">Home 1</Link>
                  </li>
                  <li>
                    <Link to="">Home 2</Link>
                  </li>
                  <li>
                    <Link to="">Home 3</Link>
                  </li>
                  <li>
                    <Link to="">Home 4</Link>
                  </li>
                  <li>
                    <Link to="">Home 5</Link>
                  </li>
                  <li>
                    <Link to="">Home 6</Link>
                  </li>
                  <li>
                    <Link to="">Home 7</Link>
                  </li>
                  <li>
                    <Link to="">Home 8</Link>
                  </li>
                  <li>
                    <Link to="">Home 9</Link>
                  </li>
                  <li>
                    <Link to="">RTL</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="cursor-pointer" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <div className="">
                <div
                  onClick={() => setPagesOpen(!pagesopen)}
                  className="flex cursor-pointer justify-between items-center"
                >
                  <h1>Pages</h1>
                  <h1 className="text-3xl">{pagesopen ? "_" : "+"}</h1>
                </div>
                <ul
                  className={` ml-5 leading-11 ${
                    pagesopen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link to="/pages/contract-us">Contract Us</Link>
                  </li>
                  <li>
                    <Link to="/pages/features">Features</Link>
                  </li>
                  <li>
                    <Link to="/pages/testimonial">Testimonial</Link>
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
              </div>
            </li>
            <li>
              <div className="">
                <div
                  onClick={() => setBlogOpen(!blogopen)}
                  className="flex cursor-pointer justify-between items-center"
                >
                  <h1>Bloge</h1>
                  <h1 className="text-3xl">{blogopen ? "_" : "+"}</h1>
                </div>
                <ul
                  className={`ml-5 leading-11 ${blogopen ? "block" : "hidden"}`}
                >
                  <li>
                    <Link to="/blogs/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blogs/detailes-left">Detailes Left</Link>
                  </li>
                  <li>
                    <Link to="/blogs/detailes-right">Detailes Right</Link>
                  </li>
                  <li>
                    <Link to="/blogs/blog-detailes">Blog Details</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="">
                <div
                  onClick={() => setAccountOpen(!accountopen)}
                  className="flex cursor-pointer justify-between items-center"
                >
                  <h1>Account</h1>
                  <h1 className="text-3xl">{accountopen ? "_" : "+"}</h1>
                </div>
                <ul
                  className={`ml-5 leading-11 ${
                    accountopen ? "block" : "hidden"
                  }`}
                >
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
              </div>
            </li>
          </ul>
        </nav>
        <button className=" bg-white text-black flex w-full sm:w-[50%] sm:mx-auto justify-center items-center gap-3 py-4.5 rounded-md hover:text-blue-800 mt-10 font-bold">
          <Link to="">Book a Consultation</Link>
          <MdArrowOutward />
        </button>
        <div>
          <div>
            <p className="text-2xl font-semibold mt-8">Contact Info</p>
            <ul>
              <li className="flex items-center my-3 mt-5 gap-3">
                <span className="text-2xl">
                  <FiPhone />
                </span>
                <Link to="">9218880022</Link>
              </li>
              <li className="flex items-center my-3 mt-5 gap-3">
                <span className="text-2xl">
                  <MdOutlineEmail />
                </span>
                <Link to="">example@visafast.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-5">Our Location</p>
            <div className="flex items-center my-3 mt-5 gap-3">
              <span className="text-2xl">
                <IoLocationOutline />
              </span>
              <div>
                <p>55 East Birchwood Ave.Brooklyn,</p>
                <p>Nwe York 11201,United States</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-5">Our Location</p>
            <div className="flex gap-5 mt-5">
              <div className="text-black bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition duration-500 ease-in-out">
                <Link to="">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="text-black bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition duration-500 ease-in-out">
                <Link to="">
                  <FaYoutube />
                </Link>
              </div>
              <div className="text-black bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition duration-500 ease-in-out">
                <Link to="">
                  <IoLogoInstagram />
                </Link>
              </div>
              <div className="text-black bg-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition duration-500 ease-in-out">
                <Link to="">
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_menu;
