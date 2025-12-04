import React from "react";
import Navber from "../features/Navber";

import Footer from "../features/Footer";
import HomeHero from "./HomeHero";
import HowItWorks from "./HowItWorks";
import SecureApps from "./SecureApps";
import Ultimate from "./Ultimate";
import Autofill from "./Autofill";
import Testimonials from "./Testimonials";
import PricingPlan from "./PricingPlan";
import OurBlog from "./OurBlog";
import DigitalWorld from "./DigitalWorld";

const Home = () => {
  return (
    <div>
      <Navber />
      <div className="z-10 text-[#271A3C] max-w-[100vw] overflow-x-hidden ">
        <HomeHero />
        <HowItWorks />
        <SecureApps />
        <Ultimate />
        <Autofill />
        <Testimonials />
        <PricingPlan />
        <OurBlog />
        <DigitalWorld />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
