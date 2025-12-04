import { Link } from "react-router";

import "../../../about/aboutComponent/AboutHero.css";
import Img from "../../../../src/assets/work2-img2.png";
const Enhance = () => {
  return (
    <div className="w-[90%] md:gap-5 lg:gap-10 my-20 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="p-5">
        <button className="bg-[#ECE5FE] text-blue-500 py-1 px-5 rounded-3xl ">
          Email Deliverability
        </button>
        <h1 className="text-[33px] leading-10 my-5 font-semibold">
          Target Your Audience
        </h1>
        <p className="text-[17px] text-[#554F5F] mb-5">
          Experience peace of mind with our deliverability-focused product,
          eeSoftped & fail-safes, real-time notifications, and spam prevention,
          ensuring your emails consistently land in the right inboxes and
          sparing you the frustration of spam placement.
        </p>
        <button className="my-6 ">
          <Link className="py-3.5 px-5 singinbtn" to="">
            <span className="">Sign Up For Free</span>
          </Link>
        </button>
      </div>
      <div>
        <img src="../../../../src/assets/work2-img2.png" alt="" />
      </div>
    </div>
  );
};

export default Enhance;
