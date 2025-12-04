import React from "react";
import Navber from "../about/aboutComponent/Navber";
import Costomer from "./contract/Costomer";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";

const Contract_us = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <Navber />
      <Costomer />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Contract_us;
