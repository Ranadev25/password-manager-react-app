import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Img1 from "../../../src/assets/nietzsche.png";
import Img2 from "../../../src/assets/epicurious.png";
import Img3 from "../../../src/assets/cloudwatch.png";
import Img4 from "../../../src/assets/acmecrop.png";
import Img5 from "../../../src/assets/polymath.png";
import Main from "../../../src/assets/main-man.png";

const ClientFeedback = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <div
          onClick={onClick}
          className="absolute  left-[50%] max-lg:hidden bottom-[-600%]  hover:bg-[#5611eb] bg-[#141fef6f] text-white p-3 rounded-full cursor-pointer z-10"
        >
          <FaArrowRightLong />
        </div>
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute  right-[55%]  max-lg:hidden bottom-[-600%] hover:bg-[#4e07e6] bg-[#0a14d169] text-white p-3 rounded-full cursor-pointer z-10"
      >
        <FaArrowLeftLong />
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-10">
      <div className="w-[90%] md:w-[500px] lg:w-[620px]  text-center mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-[75px] font-[500] text-center">
          Client Feedback
        </h1>
        <p className="text-[18px] text-[#554F5F] mt-7">
          At eSoft, we value your inquiries and are here to provide the support
          you need. Whether you're looking for more information an about our
          cutting.
        </p>
      </div>
      <div className="w-[93%] p-10 mt-20 mx-auto relative bg-white rounded-md ">
        <Slider {...settings} className="">
          <img className="px-2 md:px-5" src={Img1} alt="" />
          <img className="px-2 md:px-5" src={Img2} alt="" />
          <img className="px-2 md:px-5" src={Img3} alt="" />
          <img className="px-2 md:px-5" src={Img4} alt="" />
          <img className="px-2 md:px-5" src={Img5} alt="" />
          <img className="px-2 md:px-5" src={Img1} alt="" />
          <img className="px-2 md:px-5" src={Img2} alt="" />
          <img className="px-2 md:px-5" src={Img3} alt="" />
        </Slider>

        <div className="md:flex pt-10 gap-10 items-center lg:gap-20">
          <div className="md:w-[70%] ">
            <div className=" mb-5">
              <span>🌟</span>
              <span>🌟</span>
              <span>🌟</span>
              <span>🌟</span>
              <span>🌟</span>
            </div>
            <p className="text-[18px] font-[400]">
              “The team at eSoft not only delivered what was promised but also
              provided valuable insights that added immense value to our
              project, on your needs an Based on your needs, we devise. The
              support team is exceptional! They've been responsive and helpful
              at every step.”
            </p>
            <h3 className="text-2xl font-[600] mt-5">
              Oliver Grioud/CEO, Lava Ltd
            </h3>
            <p className="text-[17px] text-[#554F5F] mt-2">
              Read More Testimonials Feedback
            </p>
          </div>

          <div className="md:w-[30%]">
            <img className=" md:float-right mx-auto" src={Main} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
