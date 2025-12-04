import React from "react";
import Navber from "../about/aboutComponent/Navber";
import UltimateEmail from "./Blog_Left/UltimateEmail";
import MasterfulEmail from "./Blog_Left/MasterfulEmail";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";
import OurLatestBlog from "./Blog_Left/OurLatestBlog";

const Details_left = () => {
  return (
    <div className="bg-[#F8F9FE]">
      <Navber />
      <UltimateEmail />
      <MasterfulEmail />
      <OurLatestBlog />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Details_left;
