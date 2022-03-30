import React from "react";
import Avatar from "../../../Assets/svg/Avatar.svg";
import Edit from "../../../Assets/svg/edit.svg";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Profile = () => {
  const [hamburger, setHamburger] = React.useState(0);

  return (
    <div>
      <Navbar
        title="Profile"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="errander"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-8`}
      >
        <div className="flex justify-center items-center">
          <img src={Avatar} alt="Avatar" />
        </div>

        <div className="flex justify-end ">
          <Link to="/erranderprofileedit">
            {" "}
            <img src={Edit} alt="Edit" className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-center">
          <span className="font-bold text-[26px] font-[Roboto]">
            Kimmy Natasa
          </span>
        </div>
        <center>
          <div className="flex items-end justify-between mt-6 w-[80%]">
            <div className="flex flex-col items-center">
              <span className="font-bold text-[20px] font-[roboto]">50</span>
              <span className="text-[#AFAFAF] text-[16px] font-[roboto]">
                Completed Errand
              </span>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <MdOutlineStarPurple500 className="text-[35px] text-[#FFB461]" />
              </div>

              <div className="flex flex-col items-center">
                <span className="font-bold text-[20px] font-[roboto]">5</span>
                <span className="text-[#AFAFAF] text-[16px] font-[roboto]">
                  (296)
                </span>
              </div>
            </div>
          </div>
        </center>

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
    </div>
  );
};

export default Profile;
