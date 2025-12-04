import "./AboutHero.css";
import AboutMainImg from "../../assets/about-main-img.png";
import { Link } from "react-router";
import AboutMainImgbg from "../../../src/assets/blueShedowRightCenter.png";

const AboutHero = () => {
  return (
    <div className="grid bg-[#F5F8FF] items-center md:grid-cols-2 gap-5  md:pl-10 lg:pl-18 ">
      <div className="p-5">
        <h1 className="text-4xl font-semibold sm:text-[70px] ">About App</h1>
        <p className="text-[#4E4D61] my-7">
          Revolutionise & email marketing strategy with cutting-edge software
          designed to elevate your campaigns, our intuitive.
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

      <div className=" z-10 bg-[url('../../../src/assets/blueShedowRightCenter.png')] bg-right bg-no-repeat">
        <div className="bg-[url('../../../src/assets/blueShedowCenterCercle.png')] bg-center">
          <img
            className=" aboutmainimg py-10 pb-20"
            src={AboutMainImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
