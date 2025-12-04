import React from "react";
import { Link } from "react-router";

import "./AboutHero.css";
import Cta1 from "../../../src/assets/cta2-main-img.png";
import Cta2 from "../../../src/assets/cta2-shape2.png";
import Cta3 from "../../../src/assets/cta2-shape1.png";

const Join500 = () => {
  return (
    <div className="bg-[#6A5CFF] md:mb-48 lg:mb-90 text-[17px] md:h-[600px] lg:h-[700px] text-center  mt-20 py-16 text-white ">
      <div className=" mx-auto w-[95%] sm:w-[85%] md:w-[500px] ">
        <h1 className="text-[40px] my-5 leading-12 font-semibold">
          Join 500,000+ SEO's who trust eSoft for insights that help their
          business grow.
        </h1>
        <p className="pb-5">
          eSoft has exceeded our expectations in every way. The ease with &
          which we can target specific audience segments has an transform.
        </p>
        <button className="my-6 mb-16">
          <Link className="py-3.5 px-5 singinbtns" to="">
            <span className="">Try For Free Now</span>
          </Link>
        </button>
      </div>
      <div className=" relative">
        <img
          className=" max-sm:w-[90%] max-md:w-[80%] md:w-[80%] lg:w-[90%]  mx-auto md:"
          src={Cta1}
          alt=""
        />
        <img
          className="max-md:hidden absolute lg:top-[-28%] top-[-35%] left-[-5%] lg:left-[-7%]"
          src={Cta2}
          alt=""
        />
        <img
          className="max-md:hidden absolute top-[-16%] right-[6%] lg:top-[-10%] lg:right-[2%]"
          src={Cta3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Join500;
