import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

import MainSpan from "../../src/assets/main-span8.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Test from "../../src/assets/tes8-main-image.png";
const Testimonials = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <div
          onClick={onClick}
          className="absolute right-2 md:right-[-38px] top-[65%] -translate-y-1/2 bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-white p-2 rounded-full cursor-pointer z-10"
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-2 md:right-[-38px] top-[50%] -translate-y-1/2 bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-white p-2 rounded-full cursor-pointer z-10"
      >
        <MdOutlineKeyboardArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <div className="w-[90%] sm:w-[500px] mx-auto mt-32 mb-16 text-center">
        <motion.button
          initial={{ x: 100, scale: 0, opacity: 0 }}
          whileInView={{
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="flex  mx-auto gap-3 text-[17px] bg-[#0404ee15] px-4 py-1.5 rounded-lg"
        >
          <img src={MainSpan} alt="" />
          <p className="bg-gradient-to-r from-[#712EFE] to-[#D227F7] text-transparent bg-clip-text">
            Our Testimonials
          </p>
        </motion.button>
        <motion.h1
          initial={{ x: 100, letterSpacing: "2px", opacity: 0 }}
          whileInView={{
            x: 0,
            letterSpacing: "0",
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="text-[40px] font-[500]"
        >
          Our Satisfied Client Says
        </motion.h1>
      </div>
      <div className="px-5 sm:px-10 md:px-20 lg:px-20 mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ y: 100, letterSpacing: "2px", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          <img src={Test} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 100, letterSpacing: "2px", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className=""
        >
          <Slider {...settings}>
            <div className="bg-[#F4F3FF] p-5 rounded-xl mt-10">
              <div className="py-3">
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
              </div>
              <h2 className="">
                "We've integrated the POS siftware with our story and it's made
                managing both so much easier. the syncronization berween our
                phusical and ohysical and online inventory is seamless, & the
                centralized data helps"{" "}
              </h2>
              <h1 className="text-lg font-semibold mt-6">Thomas Muller</h1>
              <p className="text-[#554F5F]">Amazon Market</p>
            </div>

            <div className="bg-[#F4F3FF] p-5 rounded-xl mt-10">
              <div className="py-3">
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
              </div>
              <h2 className="">
                "We've integrated the POS siftware with our story and it's made
                managing both so much easier. the syncronization berween our
                phusical and ohysical and online inventory is seamless, & the
                centralized data helps"{" "}
              </h2>
              <h1 className="text-lg font-semibold mt-6">Thomas Muller</h1>
              <p className="text-[#554F5F]">Amazon Market</p>
            </div>

            <div className="bg-[#F4F3FF] p-5 rounded-xl mt-10">
              <div className="py-3">
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
              </div>
              <h2 className="">
                "We've integrated the POS siftware with our story and it's made
                managing both so much easier. the syncronization berween our
                phusical and ohysical and online inventory is seamless, & the
                centralized data helps"{" "}
              </h2>
              <h1 className="text-lg font-semibold mt-6">Thomas Muller</h1>
              <p className="text-[#554F5F]">Amazon Market</p>
            </div>

            <div className="bg-[#F4F3FF] p-5 rounded-xl mt-10">
              <div className="py-3">
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
                <span>🌟</span>
              </div>
              <h2 className="">
                "We've integrated the POS siftware with our story and it's made
                managing both so much easier. the syncronization berween our
                phusical and ohysical and online inventory is seamless, & the
                centralized data helps"{" "}
              </h2>
              <h1 className="text-lg font-semibold mt-6">Thomas Muller</h1>
              <p className="text-[#554F5F]">Amazon Market</p>
            </div>
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
