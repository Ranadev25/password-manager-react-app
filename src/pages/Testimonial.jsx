import React from "react";
import Navber from "../about/aboutComponent/Navber";
import ClientFeedback from "./tastimonial/ClientFeedback";
import TastimonialClint from "./tastimonial/TastimonialClint";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";

const Testimonial = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <Navber />
      <ClientFeedback />
      <TastimonialClint />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Testimonial;
