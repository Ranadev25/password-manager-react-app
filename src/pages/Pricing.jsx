import React from "react";
import Navber from "../about/aboutComponent/Navber";
import AboutHero from "../about/aboutComponent/AboutHero";
import Saveup from "./pricingplan/Saveup";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";

const Pricing = () => {
  return (
    <div className="bg-[#F8F9FE]">
      <Navber />
      <AboutHero />
      <Saveup />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Pricing;
