import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Modal = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="flex justify-between bg-[#fff] shadow-[-50px_-22px_78px_-23px_rgba(0,0,0,0.25)] rounded-t-[30px] mt-4 ">
          <div className="flex flex-row p-5 font-bold">Order #30528</div>
          <div className="flex flex-row p-5">
            <IoIosArrowDown className="text-[24px]" />
          </div>

          <div className="flex items-center justify-center bg-[#62C78A] w-2/5 p-5 rounded-tr-[30px] rounded-bl-[15px]">
            <span className="text-[15px] font-bold text-[white]">Running</span>

            <div className="ml-2">
              <MdOutlineRemoveRedEye className="text-[20px] text-[white] " />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#fff] shadow-[-26px_64px_97px_-5px_rgba(0,0,0,0.25)] rounded-b-[30px] px-5 py-5">
          <input
            type={"text"}
            className="outline-none  p-4 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#2c2c2c]"
            defaultValue={"Tanke     >      Asadam"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
