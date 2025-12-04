import { Link } from "react-router";
import "../../about/aboutComponent/AboutHero.css";

import Mainbg from "../../../src/assets/10061.png";
const DownlodeEsoft = () => {
  return (
    <div className="lg:bg-[url('../../../src/assets/10069.png')] bg-right bg-no-repeat ">
      <div className="bg-[url('../../../src/assets/blueShedowRightCenter.png')] bg-right  bg-no-repeat ">
        <div className="lg:flex mt-20 gap-10  lg:pl-16 items-center lg:bg-[url('../../../src/assets/blueShedowLeftCenter.png')] bg-left bg-no-repeat">
          <div className=" lg:w-[55%] max-lg:w-[90%] mx-auto select-none ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[500] lg:leading-22">
              Download eSoft On Any & Every Device
            </h1>
            <p className="text-[19px] my-5 text-[#554F5F">
              Where email marketing meets innovation. Say goodbye to generic{" "}
              <br />
              campaigns hello to personalised, high-converting emails resonate
              with your audience.
            </p>
            <button className="my-6 ">
              <Link className="py-3.5 px-5 singinbtn" to="">
                <span className="">Sign Up For Free</span>
              </Link>
            </button>
            <button className="my-6 mb-20 ">
              <Link className="py-3.5 px-5 singinbtns" to="">
                <span className="">Sign Up For Free</span>
              </Link>
            </button>
          </div>
          <div className="max-sm:px-5 max-lg:mt-10 lg:w-[45%] overflow-hidden mb-20 ">
            <img
              className="lg:relative   max-lg:w-[80%] mx-auto right-[-30px] m"
              src={Mainbg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownlodeEsoft;
