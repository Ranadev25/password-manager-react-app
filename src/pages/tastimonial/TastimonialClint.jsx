import React, { useEffect, useState } from "react";
import Persomes from "./Persomes";

const TastimonialClint = () => {
  const [person, setPerson] = useState([]);
  const itemsPerPage = 6;
  const [totalpage, settotalpage] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);

  console.log(totalpage);
  let start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  useEffect(() => {
    fetch(`http://localhost:3000/person`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
        settotalpage(Math.ceil(data.length / itemsPerPage));
      });

    fetch(`http://localhost:3000/person?_start=${start}&_end=${end}`)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      });
  }, [currentPage]);

  const hendelPageChange = (index) => {
    setCurrentpage(index + 1);
  };

  const hendelprevious = () => {
    setCurrentpage(currentPage - 1);
  };

  const hendelnextpage = () => {
    setCurrentpage(currentPage + 1);
  };

  const hendelfirstpage = () => {
    setCurrentpage(1);
  };
  const hendellastpage = () => {
    setCurrentpage(totalpage);
  };

  return (
    <>
      <div className="w-[94%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        {person.map((items) => (
          <Persomes key={items.id} persons={items} />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={hendelfirstpage}
          className="w-22 h-10 rounded-full m-2 mt-5 bg-[#0000ff2b]"
        >
          FirstPage
        </button>
        <button
          onClick={hendelprevious}
          className="w-22 h-10 rounded-full m-2 mt-5 bg-[#0000ff2b]"
          disabled={currentPage == 1}
        >
          previous
        </button>
        {Array.from({ length: totalpage }, (_, index) => {
          return (
            <button
              key={index}
              onClick={() => hendelPageChange(index)}
              className={`w-10 h-10 rounded-full m-2 mt-5  ${
                currentPage == index + 1 ? "bg-blue-500" : "bg-[#0000ff2b]"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={hendelnextpage}
          className="w-22 h-10 rounded-full m-2 mt-5 bg-[#0000ff2b]"
          disabled={currentPage == totalpage}
        >
          Next
        </button>
        <button
          onClick={hendellastpage}
          className="w-22 h-10 rounded-full m-2 mt-5 bg-[#0000ff2b]"
        >
          LastPage
        </button>
      </div>
    </>
  );
};

export default TastimonialClint;
