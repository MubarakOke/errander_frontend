import React from "react";
import Wall from "../../../Assets/image/wall.png";
import { BsPlusLg } from "react-icons/bs";
const Order = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-28">
      <img src={Wall} alt="wall" />
      <div className="flex flex-col mt-12 text-[#AAAAAA] text-[21px] items-center font-bold">
        <span>You have no orders! </span>
        <span>Create orders now.</span>
      </div>
      <div className="rounded-full bg-[#D7EBE2] p-5 mt-12 cursor-pointer">
        <BsPlusLg className="text-[26px] text-[#0E4E48]" />
      </div>
    </div>
  );
};

export default Order;
