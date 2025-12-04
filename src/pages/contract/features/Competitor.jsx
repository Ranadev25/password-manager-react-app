import { Link } from "react-router";
import { FaCheck } from "react-icons/fa6";

import "../../../about/aboutComponent/AboutHero.css";
import Feather2 from "../../../../src/assets/features-stiky3.png";
import Stiky from "../../../../src/assets/stiky-sec-shape2.png";
const Competitor = () => {
  return (
    <div className="bg-white mx-6 sm:mx-7 md:mx-10 lg:mx-16 p-5 sm:p-10 rounded-md shadow-md grid lg:grid-cols-2 gap-10 mb-5">
      <div>
        <h1 className="text-3xl font-semibold">Local SEO Enhancement</h1>
        <p className="text-[17px] text-[#554F5F] py-5">
          Optimise your online presence for local searches, attracting nearby
          customers and clients. Stay ahead of industry market changes with
          regular software updates that incorporate.
        </p>
        <ul>
          <li className="flex items-center gap-3 mt-4">
            <span className="text-sm bg-black text-white p-1 rounded-full">
              <FaCheck />
            </span>
            <p className="text-[18px]">Content Optimization Tools</p>
          </li>
          <li className="flex items-center gap-3 my-5">
            <span className="text-sm bg-black text-white p-1 rounded-full">
              <FaCheck />
            </span>
            <p className="text-[18px]"> Regular Performance Monitoring</p>
          </li>
          <li className="flex items-center gap-3 mb-5">
            <span className="text-sm bg-black text-white p-1 rounded-full">
              <FaCheck />
            </span>
            <p className="text-[18px]">Improved Search Engine Rankings</p>
          </li>
        </ul>
        <button className="my-6 ">
          <Link className="py-3.5 px-5 singinbtn" to="">
            <span className="">Sign Up For Free</span>
          </Link>
        </button>
      </div>
      <div className="relative inline-block">
        <img
          className=" absolute  lg:right-[-35px] md:top-[-35px] max-md:hidden max-lg:left-[510px]"
          src={Stiky}
          alt=""
        />
        <img src={Feather2} alt="" />
      </div>
    </div>
  );
};

export default Competitor;
