import React from "react";
import Navber from "../about/aboutComponent/Navber";
import AboutHero from "../about/aboutComponent/AboutHero";
import Competitor from "./contract/features/Competitor";
import HowItWorks from "./contract/features/HowItWorks";
import Enhance from "./contract/features/Enhance";
import Target from "./contract/features/Target";
import EmailExcellence from "../about/aboutComponent/EmailExcellence";
import Join500 from "../about/aboutComponent/Join500";
import Footer from "../about/aboutComponent/Footer";
import EmailInnovation from "../about/aboutComponent/EmailInnovation";

const Features = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <Navber />
      <AboutHero />
      <Competitor />
      <HowItWorks />
      <EmailInnovation />
      <Enhance />
      <Target />
      <EmailExcellence />
      <Join500 />
      <Footer />
    </div>
  );
};

export default Features;
