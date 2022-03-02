import React from "react";
import Avatar from "../../../Assets/svg/Avatar.svg";
import Edit from "../../../Assets/svg/edit.svg";
import {Link} from "react-router-dom"
const Profile = () => {
  return (
    <div className="px-8">
      <div className="flex justify-center items-center">
        <img src={Avatar} alt="Avatar" />
      </div>

      <div className="flex justify-end ">
        <Link to="/CustomerProfileEdit">
          {" "}
          <img src={Edit} alt="Edit" className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex justify-center">
        <span className="font-bold text-[26px] font-[Roboto]">
          Kimmy Natasa
        </span>
      </div>
      <div className="flex items-end justify-between mt-6">
        <div className="flex flex-col items-center">
          <span className="font-bold text-[20px] font-[roboto]">1,260</span>
          <span className="text-[#AFAFAF] text-[16px] font-[roboto]">
            total Order
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[20px] font-[roboto]">1,260</span>
          <span className="text-[#AFAFAF] text-[16px] font-[roboto]">
            Cancel Order
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[20px] font-[roboto]">1,260</span>
          <span className="text-[#AFAFAF] text-[16px] font-[roboto]">
            Completed Order
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-10 justify-between h-[220px]">
        <div className="flex flex-col">
          <span className="text-[#AFAFAF] text-[14px]">Full Name</span>
          <span className="font-bold text-[16px]">Kimmy Natasa</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#AFAFAF] text-[14px]">Phone Number</span>
          <span className="font-bold text-[16px]">(201) 555 - 555</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#AFAFAF] text-[14px]">Email</span>
          <span className="font-bold text-[16px]">KimNata@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
