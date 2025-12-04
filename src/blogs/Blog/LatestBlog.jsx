import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const LatestBlog = () => {
  const [users, setUser] = useState([]);
  const [usebg, setUseBg] = useState(1);

  const itemPerPage = 6;
  const [currentpage, setCurrentPage] = useState(1);
  const [tottlePage, setTottlePage] = useState(0);

  const start = (currentpage - 1) * itemPerPage;
  const end = start + itemPerPage;

  useEffect(() => {
    fetch("http://localhost:5001/bloge")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setTottlePage(Math.ceil(data.length / itemPerPage));
      })
      .catch((err) => console.log(err.message));

    fetch(`http://localhost:5001/bloge?_start=${start}&_end=${end}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err.message));
  }, [currentpage]);

  const hendelbtnbg = (id) => {
    setCurrentPage(id);
  };
  const hendelnextbtn = () => {
    if (currentpage < tottlePage) {
      setCurrentPage(currentpage + 1);
    }
  };
  const hendelPreviousbtn = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  };
  return (
    <div>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:mt-69 max-md:mt-20 items-center">
        <div>
          <h1 className="text-[39px] font-[500]">Our Latest Blog & News</h1>
          <p className="text-[17px] text-[#554F5F] my-5">
            Our dynamic Landing Pages redefine user experiences, eSoft ensuring
            every click counts, dive into the world of insightful.
          </p>
        </div>
        <div>
          <button
            onClick={() => setUseBg(1)}
            className={`${
              usebg == 1 ? "bg-blue-600" : "bg-white"
            } rounded-lg py-2.5 mx-2 my-4 px-4 text-[17px]`}
          >
            All
          </button>
          <button
            onClick={() => setUseBg(2)}
            className={`${
              usebg == 2 ? "bg-blue-600" : "bg-white"
            } rounded-lg py-2.5 mx-2 my-4 px-4 text-[17px]`}
          >
            Resources
          </button>
          <button
            onClick={() => setUseBg(3)}
            className={`${
              usebg == 3 ? "bg-blue-600" : "bg-white"
            }  rounded-lg py-2.5 mx-2 my-4 px-4 text-[17px]`}
          >
            Guides
          </button>
          <button
            onClick={() => setUseBg(4)}
            className={`${
              usebg == 4 ? "bg-blue-600" : "bg-white"
            }  rounded-lg py-2.5 mx-2 my-4 px-4 text-[17px]`}
          >
            Updates
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 overflow-hidden">
        {users.map((user) => {
          const { id, title, image, author, date, description } = user;
          return (
            <div key={id} className="bg-white">
              <div className="">
                <div className="w-full  h-full overflow-hidden relative ">
                  <img
                    className=" mx-auto hover:scale-[1.5] hover:rotate-12 transition-transform duration-500 ease-in-out  "
                    src={image}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[18px] text-[#554F5F]">
                        <FaRegCalendarAlt />
                        <p>{date}</p>
                      </div>
                      <div className="flex items-center gap-3 text-[18px] text-[#554F5F]">
                        <FaRegUser />
                        <p>{author}</p>
                      </div>
                    </div>
                    <h1 className="text-[25px] font-semibold my-4 ">{title}</h1>
                    <p className="text-17px] text-[#554F5F] mb-4">
                      {description}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 font-semibold">
                    <Link to="/blogs/blog-detailes">Read More</Link>
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          disabled={currentpage == 1}
          onClick={hendelPreviousbtn}
          className="bg-[#1208cc2c] px-2 py-1.5 rounded-full"
        >
          previous
        </button>
        {Array.from({ length: tottlePage }, (_, index) => {
          return (
            <button
              onClick={() => hendelbtnbg(index + 1)}
              key={index}
              className={`${
                currentpage == index + 1 ? "bg-blue-600" : "bg-[#0000ff18]"
              }  w-10 h-10 my-5 rounded-full mx-2`}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          disabled={currentpage == tottlePage}
          onClick={hendelnextbtn}
          className="bg-[#1208cc2c] px-2 py-1.5 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
