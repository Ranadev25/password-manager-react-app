import React from "react";
import Navber from "../about/aboutComponent/Navber";
import DownlodeEsoft from "./Downlode/DownlodeEsoft";
import Apps_eSoft from "./Downlode/Apps_eSoft";
import DesktopVersion from "./Downlode/DesktopVersion";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";

const Download = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <Navber />
      <DownlodeEsoft />
      <Apps_eSoft />
      <DesktopVersion />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Download;
