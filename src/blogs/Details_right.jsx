import React from "react";
import Navber from "../about/aboutComponent/Navber";
import UltimateEmail from "./Blog_Left/UltimateEmail";
import OurLatestBlog from "./Blog_Left/OurLatestBlog";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";
import EmailMarketing from "./Blog_Left/EmailMarketing";
import EmailCampaign from "./Blog_Left/EmailCampaign";

const Details_right = () => {
  return (
    <div>
      <Navber />
      <UltimateEmail />
      <div className="lg:flex w-[90%] mx-auto gap-5 ">
        <div className="lg:w-[65%]">
          <EmailMarketing />
        </div>
        <div className="lg:w-[35%]">
          <EmailCampaign />
        </div>
      </div>
      <OurLatestBlog />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Details_right;
