import React from "react";
import Navber from "../about/aboutComponent/Navber";
import UltimateEmail from "./Blog_Left/UltimateEmail";
import EmailMarketing from "./Blog_Left/EmailMarketing";
import OurLatestBlog from "./Blog_Left/OurLatestBlog";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";

const Blog_Datails = () => {
  return (
    <div>
      <Navber />
      <UltimateEmail />
      <div className="md:w-[80%] lg:w-[70%] mx-auto">
        <EmailMarketing />
      </div>
      <OurLatestBlog />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Blog_Datails;
