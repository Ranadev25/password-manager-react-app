import React from "react";

const Persomes = ({ persons }) => {
  const { cotteqion, name, position, companyLogo, rating, review, image } =
    persons;
  return (
    <div className="p-7 bg-white rounded-md">
      <div className="flex justify-between items-center pb-3">
        <p>{rating}</p>
        <img src={cotteqion} alt="" />
      </div>
      <p>{review}</p>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-5">
          <img className="max-w-[70px] rounded-full" src={image} alt="" />
          <div>
            <h1 className="text-[24px] font-[500]">{name}</h1>
            <p className="text-[#554F5F]">{position}</p>
          </div>
        </div>
        <div>
          <img src={companyLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Persomes;
