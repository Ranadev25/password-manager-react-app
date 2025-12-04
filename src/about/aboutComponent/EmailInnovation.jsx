import { Link } from "react-router";

import "./AboutHero.css";
import Other2 from "../../../src/assets/others2-image.png";
import OtherSharp from "../../../src/assets/others2-shape1.png";
const EmailInnovation = () => {
  return (
    <div className="bg-[#6A5CFF] gap-10 items-center max-sm:pb-0 text-[17px] text-white p-5 md:p-10 lg:p-18 md:flex">
      <div className="md:w-[45%]">
        <h1 className="text-[40px] font-semibold leading-14">
          Email innovation: Craft marketing an success
        </h1>
        <p className="my-8 leading-9">
          Email marketing journey transforms into a streamlined, an powerful
          experience. Our cutting-edge platform eeSofts you with the tools to
          craft compelling, personalized
        </p>
        <button className="my-6 max-md:mb-20 ">
          <Link className="py-3.5 px-5 singinbtns" to="">
            <span className="">Sign Up For Free</span>
          </Link>
        </button>
      </div>
      <div className="md:w-[55%] relative">
        <img className=" absolute top-[-90px]" src={OtherSharp} alt="" />
        <img className="w-full" src={Other2} alt="" />
      </div>
    </div>
  );
};

export default EmailInnovation;
