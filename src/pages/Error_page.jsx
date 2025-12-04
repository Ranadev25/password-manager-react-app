import { Link } from "react-router";

import "../about/aboutComponent/AboutHero.css";
import Image from "../../src/assets/error.png";
const Error_page = () => {
  return (
    <div className="mb-20">
      <div className="bg-[url('../../src/assets/app404.png')] bg-no-repeat bg-top-right ">
        <div className="bg-[url('../../src/assets/app404.png')] bg-no-repeat bg-bottom-left">
          <img className="mx-auto pt-32" src={Image} alt="" />
          <div className="w-[90%]  lg:w-[66%] mx-auto text-center">
            <h1 className="text-3xl font-[500] md:text-5xl">
              Sorry Somthing went wrong
            </h1>
            <p className="my-7 leading-8 text-[17px] text-[#554F5F]">
              But don't worry, we've got your back. Here are a few options to
              get you back on track: Contact Support: If you believe there's a
              problem with our site.
            </p>
            <button className="my-6  ">
              <Link className="py-3.5 px-10 singinbtn" to="/">
                <span className="">go to home page</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error_page;
