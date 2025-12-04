import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Mainimg from "../../../src/assets/10056.png";
import Img from "../../../src/assets/10057m.png";
const EmailMarketing = () => {
  return (
    <div className="w-[94%] mx-auto bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <img className="mx-auto" src={Mainimg} alt="" />
      </div>
      <div className="p-5">
        <button className="text-blue-600 bg-[#0804f61e] px-4 rounded-full py-1">
          Email Marketing
        </button>
        <h1 className="text-[29px] my-6 font-[500] text-[#271A3C] leading-10">
          Elevate Engagement, Drive Conversions, Transform Ideas into Reality
          with eSoft
        </h1>
        <p className="text-[17px] text-[#554F5F] mb-6">
          Revolutionise your marketing strategy with an our cutting-edge Email
          Marketing SaaS. Seamlessly manage and optimise eSoft.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src={Img} alt="" />
            <div>
              <h1 className="text-xl font-[500] ">Jonson Brans</h1>
              <p className="text-[#554F5F]">10 October 2023</p>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-[#312efec8] px-4 py-2 rounded-md text-white cursor-pointer ">
              <Link to="/blogs/blog-detailes">Read More</Link>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
