import React from "react";
import Male from "../../../Assets/svg/Male.svg";
import Female from "../../../Assets/svg/Female.svg";
import { HiArrowNarrowLeft } from "react-icons/hi";
const Page2 = ({ setContent, content }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-[30px] font-bold text-[#595959] font-[Roboto]">
          Gender
        </span>
        <div className="text-[#8A8B8B] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Select Gender
        </h1>
        <center>
          <div className="flex flex-row justify-between w-[90%] mt-8">
            <div className="shadow-[3px_-3px_7px_1px_rgba(0,0,0,0.25)]  border-[1px] border-[#C3C4C4] rounded-[55px] p-4 cursor-pointer">
              <img src={Male} alt="Male" />
            </div>
            <div className="shadow-[3px_-3px_7px_1px_rgba(0,0,0,0.25)] border-[1px] border-[#C3C4C4] rounded-[55px] p-4 cursor-pointer">
              <img src={Female} alt="Female" />
            </div>
          </div>
        </center>
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

export default Page2;

// border: 1px solid #C3C4C4;
// box-sizing: border-box;
// box-shadow: 1px -2px 5px -12px rgba(0, 0, 0, 0.25);
// border-radius: 55px;
