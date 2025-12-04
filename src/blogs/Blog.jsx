import React from "react";
import Navber from "../about/aboutComponent/Navber";
import NewsArticales from "./Blog/NewsArticales";
import EmailMarketing from "./Blog/EmailMarketing";
import Card from "./Blog/Card";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";
import LatestBlog from "./Blog/LatestBlog";

const Blog = () => {
  return (
    <div className="bg-[#F8F9FE]">
      <Navber />
      <NewsArticales />
      <EmailMarketing />
      <Card />
      <Join500 />
      <LatestBlog />
      <Footer />
    </div>
  );
};

export default Blog;
