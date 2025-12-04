import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";

import "../../about/aboutComponent/AboutHero.css";
import Bgshadowleft from "../../../src/assets/blueShedowLeftCenter.png";
import Bgshadowright from "../../../src/assets/blueShedowRightCenter.png";

const NewsArticales = () => {
  return (
    <div className="bg-[url('../../../src/assets/blueShedowLeftCenter.png')] bg-left bg-no-repeat mb-10">
      <div className="bg-[url('../../../src/assets/blueShedowRightCenter.png')] bg-right bg-no-repeat">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          <div>
            <h1 className=" hidden lg:block mt-20 md:text-6xl lg:text-7xl font-[500]  leading-22">
              News & <br /> Articles
            </h1>
            <h1 className="text-5xl lg:hidden mt-20">News & Article</h1>
            <p className="text-[17px] text-[#554F5F] py-5">
              Revolutionise & email marketing strategy with cutting-edge <br />
              software designed to elevate your campaigns, our intuitive.
            </p>
            <div className="lg:flex gap-5">
              <button className="my-6 mr-2 ">
                <Link className="py-3.5 px-5 singinbtn" to="">
                  <span className="">Get Started Now</span>
                </Link>
              </button>

              <button className="my-6 ">
                <Link className="py-3.5 px-5 singinbtns" to="">
                  <span className="">Try For Free Now</span>
                </Link>
              </button>
            </div>
          </div>
          <div>
            <form className=" relative mb-10">
              <input
                className="bg-white outline-0 rounded-full  py-5 pl-5 pr-10 w-[90%] "
                type="text"
                name="name"
                id="name"
                placeholder="Search for articles....."
              />
              <button className="w-16 flex justify-center items-center rounded-full h-16 bg-[#852DFD] absolute top-0 right-[10%] cursor-pointer">
                <IoIosSearch className="text-3xl text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticales;
