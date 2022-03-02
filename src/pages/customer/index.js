import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { RiLogoutCircleFill } from "react-icons/ri";
import Logo1 from "../../Assets/image/Logo2.png";
import { Outlet } from "react-router-dom";

const home = <AiFillHome />;
const profile = <FaUserAlt />;
const blog = <SiGooglemessages />;
const logout = <RiLogoutCircleFill />;

const sidebarContent = [
  {
    link: "/Customer/Home",
    icon: home,
    title: "Home",
  },
  {
    link: "/Customer/Profile",
    icon: profile,
    title: "Profile",
  },

  {
    link: "/Customer/Blog",
    icon: blog,
    title: "Blog",
  },

  {
    link: "/Customer/Logout",
    icon: logout,
    title: "Logout",
  },
];

const Index = () => {
  const [hamburger, setHamburger] = React.useState(0);

  const handleHamburger = (a) => {
    setHamburger(a);
  };
  const pathname = window.location.pathname;

  return (
    <div>
      {/* -----------------------------Header begins------------------------------ */}
      <div
        className={`w-full rounded-b-[41px] p-6 bg-[#D7EBE2] flex items-center justify-between fixed top-0 z-10 ${
          hamburger ? "blur-sm" : "blur-none"
        }`}
      >
        <GiHamburgerMenu
          onClick={() => {
            handleHamburger(1);
          }}
          className="text-[#0E4E48] font-bold text-[24px] cursor-pointer"
        />
        <span className="text-[#0E4E48] font-bold text-[24px] font-['Roboto'] ml-[45px]">
          {pathname.includes("/Customer/Home") && "Home"}
          {pathname.includes("/Customer/Profile") && "Profile"}
          {pathname.includes("/Customer/Blog") && "Blog"}
        </span>
        <img src={Logo1} alt="logo" className="h-[84px] w-[83px]" />
      </div>

      {/* ------------------------------------body------------------------------------ */}

      {/* ----------------------------------sidebar beigns------------------------------------ */}
      <div
        className={`h-full w-1/2 pl-5 bg-[#E8E8E8] z-20 shadow-lg shadow-[#807b7b] rounded-r-[20px] fixed top-0 left-0 ${
          hamburger ? " visible " : " hidden "
        }`}
      >
        <GiHamburgerMenu
          onClick={() => {
            handleHamburger(0);
          }}
          className="text-[#0E4E48] font-bold text-[30px] cursor-pointer my-14"
        />

        {sidebarContent.map((item, idx) => {
          return (
            <a
              href={item.link}
              key={idx}
              className={` flex text-base font-medium my-3 hover:bg-[#0E4E48] hover:text-white  rounded-l-md hover:shadow-sm hover:shadow-[#000000] p-2 ${
                pathname.includes(item.link)
                  ? "bg-[#0E4E48] text-white "
                  : "text-gray-500"
              }`}
            >
              <div className="flex items-center">
                {" "}
                <div className="mr-3"> {item.icon}</div>
                <div> {item.title} </div>
              </div>
            </a>
          );
        })}
      </div>
      {/* --------------Router begins------------------ */}
      <div
        onClick={() => {
          handleHamburger(0);
        }}
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
