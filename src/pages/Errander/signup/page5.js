import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Page5 = ({ content, setContent }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-[30px] font-bold text-[#595959] font-[Roboto]">
          Skills
        </span>
        <div className="text-[#8A8B8B] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] oh1acity-80 font-semibold flex text-center ml-10">
          Can you make use of internet
        </h1>

        <center>
          <div className="flex justify-between items-center w-[55%] my-8">
            <div className="shadow-[0px_0px_21px_rgba(0,0,0,0.25)] rounded-[55px] p-6 cursor-pointer">
              <ImCross className="text-[#FF5A79] text-[20px]" />
            </div>

            <div className="shadow-[0px_0px_21px_rgba(0,0,0,0.25)] rounded-[55px] p-6 cursor-pointer">
              <GiCheckMark className="text-[#37B34A] text-[20px]" />
            </div>
          </div>
        </center>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What is Your Speciality, Skill and Strength
        </h1>

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>

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

export default Page5;
