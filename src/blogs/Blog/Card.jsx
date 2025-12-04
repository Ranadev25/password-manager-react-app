import { Link } from "react-router";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-10">
      <div className="bg-white p-4 ">
        <div className="flex gap-5 items-center text-[18px] text-[#554F5F]">
          <MdOutlineCalendarMonth />
          <p>10 October 2023</p>
        </div>
        <div className="text-[20px] font-[500] my-4 hover:text-blue-700">
          <Link to="/blogs/blog-detailes">
            Power Up Your Digital Presence An Unleashing the Potential of Email.
          </Link>
        </div>
        <p className="text-[#554F5F] text-[17px]">
          Online presence with our dynamic best landing pages, designed to
          captivate.
        </p>
        <button className="flex items-center gap-2 mt-5 py-2 rounded-md font-[500] cursor-pointer ">
          <Link to="/blogs/blog-detailes">Read More</Link>
          <FaArrowRightLong />
        </button>
      </div>

      <div className="bg-white p-4 ">
        <div className="flex gap-5 items-center text-[18px] text-[#554F5F]">
          <MdOutlineCalendarMonth />
          <p>10 October 2023</p>
        </div>
        <div className="text-[20px] font-[500] my-4 hover:text-blue-700">
          <Link to="/blogs/blog-detailes">
            Power Up Your Digital Presence An Unleashing the Potential of Email.
          </Link>
        </div>
        <p className="text-[#554F5F] text-[17px]">
          Online presence with our dynamic best landing pages, designed to
          captivate.
        </p>
        <button className="flex items-center gap-2 mt-5 py-2 rounded-md font-[500] cursor-pointer ">
          <Link to="/blogs/blog-detailes">Read More</Link>
          <FaArrowRightLong />
        </button>
      </div>

      <div className="bg-white p-4 ">
        <div className="flex gap-5 items-center text-[18px] text-[#554F5F]">
          <MdOutlineCalendarMonth />
          <p>10 October 2023</p>
        </div>
        <div className="text-[20px] font-[500] my-4 hover:text-blue-700">
          <Link to="/blogs/blog-detailes">
            Power Up Your Digital Presence An Unleashing the Potential of Email.
          </Link>
        </div>
        <p className="text-[#554F5F] text-[17px]">
          Online presence with our dynamic best landing pages, designed to
          captivate.
        </p>
        <button className="flex items-center gap-2 mt-5 py-2 rounded-md font-[500] cursor-pointer ">
          <Link to="/blogs/blog-detailes">Read More</Link>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Card;
