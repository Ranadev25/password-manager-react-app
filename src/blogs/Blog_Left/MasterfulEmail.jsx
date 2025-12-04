import React from "react";
import EmailCampaign from "./EmailCampaign";
import EmailMarketing from "./EmailMarketing";

const MasterfulEmail = () => {
  return (
    <div className="lg:flex w-[90%] mx-auto gap-5 ">
      <div className="lg:w-[35%]">
        <EmailCampaign />
      </div>
      <div className="lg:w-[65%]">
        <EmailMarketing />
      </div>
    </div>
  );
};

export default MasterfulEmail;
