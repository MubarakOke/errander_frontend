import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
const Page6 = ({ content, setContent }) => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <span className="text-[30px] font-bold text-[#595959] font-[Roboto]">
          Other Infromation
        </span>
        <div className="text-[#8A8B8B] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Can you describe how you handle tight deadline/schedule
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What is the most interesting project you have embarked on
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What do you expect from A'SERVICE
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Any other relevant Infromation
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          Area of interest
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      <div className="rounded-[30px] flex flex-col shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] p-6 mt-6">
        <h1 className="text-[#8A8B8B] opacity-80 font-semibold">
          What are the location you are most familiar with
        </h1>

        {/* --------------body-------------------- */}

        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[20px] mt-6 p-4"
        ></textarea>
      </div>
      {/* -----------------------------previous and next botton-------------------------------- */}
      <div className="flex justify-end mt-6">
        <div
          onClick={() => setContent("remove")}
          className="flex items-center rounded-[6px] font-[roboto] bg-[#F9F9F9] text-[#8A8B8B] py-2 px-8 font-semibold text-[18px] cursor-pointer mr-4 hover:bg-[#0E4E48] hover:text-[#fff]"
        >
          <HiArrowNarrowLeft className="text-[22px]" />
          <span className="ml-2">Back</span>
        </div>
        <div className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer">
          Submit
        </div>
      </div>
    </div>
  );
};

export default Page6;
