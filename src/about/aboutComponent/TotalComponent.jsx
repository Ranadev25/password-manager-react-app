import React from "react";
import AboutHero from "./AboutHero";
import IntroducingOfeSoft from "./IntroducingOfeSoft";
import EmailExcellence from "./EmailExcellence";
import EmailInnovation from "./EmailInnovation";
import ConnectEntire from "./ConnectEntire";
import Join500 from "./Join500";
import Footer from "./Footer";

const TotalComponent = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <AboutHero />
      <IntroducingOfeSoft />
      <EmailExcellence />
      <EmailInnovation />
      <ConnectEntire />
      <Join500 />
      <Footer />
    </div>
  );
};

export default TotalComponent;
