import React from "react";
import Navbar from "../../../components/Navbar";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CreateBlogger = () => {
  const navigate = useNavigate();
  const [hamburger, setHamburger] = React.useState(0);
  return (
    <div>
      <Navbar
        title="Create Blogger"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="admin"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-5`}
      >
        <div
          onClick={() => navigate(-1)}
          className="rounded-full shadow-[0px_4px_40px_rgba(0,0,0,0.25)] w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-[#333333] text-[30px]" />
        </div>

        <div className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-4 py-8 mt-6">
          <div className="flex flex-col">
            <label
              htmlFor="first"
              className="font-Montserrat text-[20px] font-bold text-[#575757] ml-1 mb-1"
            >
              First Name:
            </label>
            <input
              id="first"
              type="text"
              className="outline-none rounded-[50px] bg-[#ECECEC] p-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="last"
              className="font-Montserrat text-[20px] font-bold text-[#575757] ml-1 mb-1"
            >
              Last Name:
            </label>
            <input
              id="last"
              type="text"
              className="outline-none rounded-[50px] bg-[#ECECEC] p-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="phone"
              className="font-Montserrat text-[20px] font-bold text-[#575757] ml-1 mb-1"
            >
              Phone:
            </label>
            <input
              id="phone"
              type="tel"
              className="outline-none rounded-[50px] bg-[#ECECEC] p-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="email"
              className="font-Montserrat text-[20px] font-bold text-[#575757] ml-1 mb-1"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="outline-none rounded-[50px] bg-[#ECECEC] p-4"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            to="/admin/create_blogger"
            className="outline-none bg-[#62C78A] text-[white] text-[18px] font-semibold flex justify-between items-center rounded-[29px] px-8 py-2 mt-6 cursor-pointer"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogger;
