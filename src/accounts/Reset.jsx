import { Link } from "react-router";
import Navber from "../about/aboutComponent/Navber";

import "../about/aboutComponent/AboutHero.css";
import Bluebg from "../../src/assets/solidBlueBG.png";
import Hederlogo from "../../src/assets/header-logo2.png";
const Forget = () => {
  return (
    <div>
      <div className="bg-[#F8F9FE] h-[600px] relative  ">
        <div className="bg-[url('../../src/assets/10069.png')] bg-no-repeat bg-top-left h-[600px]">
          <div className="bg-[url('../../src/assets/10069.png')] bg-no-repeat bg-top-right h-[600px]">
            <div>
              <img className="mx-auto py-32" src={Hederlogo} alt="" />
            </div>
            <div className="sm:w-[600px] absolute w-[95%] mx-auto bg-white left-[50%] translate-x-[-50%] p-10 rounded-lg">
              <div>
                <h1 className="text-center  text-[40px] sm:text-[60px] leading-18 font-[500]">
                  Reset Password
                </h1>
                <p className="text-center text-[17px] text-[#554F5F] my-5 ">
                  If you want to reset your password, please enter your new
                  password below.
                </p>
                <form action="">
                  <div className="">
                    <div className="w-full text-left text-[#271A3C]">
                      <label
                        className="text-[20px]  font-[500]"
                        htmlFor="newpassword"
                      >
                        New Password
                      </label>
                      <input
                        className="w-full bg-[#F8F9FE] mt-2 mb-3 px-3 py-4 rounded-full"
                        type="password"
                        name="newpassword"
                        id="newpassword"
                        placeholder="Enter your Password"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-full text-left text-[#271A3C]">
                      <label
                        className="text-[20px]  font-[500]"
                        htmlFor="Confirmpassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full bg-[#F8F9FE] mt-2 mb-3 px-3 py-4 rounded-full"
                        type="password"
                        name="Confirmpassword"
                        id="Confirmpassword"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="my-6 py-3.5 w-full singinbutton "
                  >
                    <Link className=" " to="">
                      <span className="">Send Recovery Link</span>
                    </Link>
                  </button>
                </form>
                <p>
                  If you didn’t request a password recovery link, please ignore
                  this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <img className="h-[300px] w-full" src={Bluebg} alt="" />
      </div>
    </div>
  );
};

export default Forget;
