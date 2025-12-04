import React from "react";

import LoginAccount from "../accounts/LoginAccount";
import Logoimg from "../../src/assets/page-img.png";
import Hederlogo from "../../src/assets/header-logo2.png";
const Login = () => {
  return (
    <div className="bg-[#F8F9FE]">
      <div>
        <img className="mx-auto py-32" src={Hederlogo} alt="" />
      </div>
      <div className="bg-[#F8F9FE] lg:flex px-10 md:px-20 relative   overflow-hidden">
        <div className="lg:w-[45%]">
          <LoginAccount />
        </div>
        <div className="lg:w-[55%]">
          <img
            className="lg:absolute bottom-10 lg:max-w-[55%] -right-10"
            src={Logoimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
