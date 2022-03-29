import React, { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
const Page4 = ({ content, setContent }) => {
  const [dropDown, setdropDown] = useState(1);
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-[30px] font-bold text-[#595959] font-[Roboto]">
          Education
        </span>
        <div className="text-[#8A8B8B] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Select Highest Education Qualification
        </h1>
        {/* -----------------input field with dropdown option------------------- */}
        <div className="flex items-center shadow-[1px_-1px_21px_rgba(0,0,0,0.25)] rounded-[10px] mt-10 p-[6px] border-[#0E4E48] border-[1px] ">
          <input
            type="text"
            className="w-[80%] h-10 text-sm peer outline-none p-2 rounded-l-[15px]"
          />
          <div
            className="w-[20%] rounded-r-[15px] text-[35px] text-[#CECFCF] flex items-center justify-center cursor-pointer"
            onClick={() => setdropDown(!dropDown)}
          >
            <IoIosArrowDown />
          </div>
        </div>
        {/* --------------------dropdown----------------- */}

        <div
          className={`p-4 flex flex-col text-[#808080] rounded-[8px] shadow-[1px_-1px_40px_rgba(0,0,0,0.25)] mt-2 ${
            dropDown ? "hidden" : ""
          }`}
        >
          <span
            onClick={() => setdropDown(!dropDown)}
            className="pb-2 pt-2 border-b-[1px]"
          >
            First Degree
          </span>
          <span
            onClick={() => setdropDown(!dropDown)}
            className="pb-2 pt-2 border-b-[1px]"
          >
            HND
          </span>
          <span
            onClick={() => setdropDown(!dropDown)}
            className="pb-2 pt-2 border-b-[1px]"
          >
            ND
          </span>
          <span
            onClick={() => setdropDown(!dropDown)}
            className="pb-2 pt-2 border-b-[1px]"
          >
            WAEC
          </span>
        </div>
        {/* --------------Next and Previous--------------------- */}
        <div className="flex justify-end mt-6">
          <div
            onClick={() => setContent("remove")}
            className="flex items-center rounded-[6px] font-[roboto] bg-[#F9F9F9] text-[#8A8B8B] py-2 px-8 font-semibold text-[18px] cursor-pointer mr-4 hover:bg-[#0E4E48] hover:text-[#fff]"
          >
            <HiArrowNarrowLeft className="text-[22px]" />
            <span className="ml-2">Back</span>
          </div>
          <div
            onClick={() => setContent("add")}
            className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
