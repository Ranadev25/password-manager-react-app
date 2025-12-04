import React from "react";
import Navber from "./aboutComponent/Navber";
import TotalComponent from "./aboutComponent/TotalComponent";

const About_us = () => {
  return (
    <div>
      <Navber />
      <div className=" overflow-x-hidden">
        <TotalComponent />
      </div>
    </div>
  );
};

export default About_us;
