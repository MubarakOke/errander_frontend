import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { RiLogoutCircleFill } from "react-icons/ri";
import Logo1 from "../../Assets/image/Logo2.png";
import { Route, Routes } from "react-router-dom";

const home = <AiFillHome />;
const profile = <FaUserAlt />;
const blog = <SiGooglemessages />;
const logout = <RiLogoutCircleFill />;

const sidebarContent = [
  {
    link: "/admin/home",
    icon: home,
    title: "Home",
  },
  {
    link: "/admin/monitor",
    icon: profile,
    title: "Profile",
  },

  {
    link: "/admin/create-users",
    icon: blog,
    title: "Blog",
  },

  {
    link: "/logout",
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
        className={`w-full rounded-b-[41px] p-6 bg-[#D7EBE2] flex items-center justify-between fixed top-0  ${
          hamburger ? "blur-sm" : "blur-none"
        }`}
      >
        <GiHamburgerMenu
          onClick={() => {
            handleHamburger(1);
          }}
          className="text-[#0E4E48] font-bold text-[24px] cursor-pointer"
        />
        <span className="text-[#0E4E48] font-bold text-[24px] font-['Roboto']">
        
          {pathname.includes("/Customer/home") && "Home"}
          {pathname.includes("/Customer/profile") && "Profile"}
          {pathname.includes("/Customer/blog") && "Blog"}
        </span>
        <img src={Logo1} alt="logo" className="h-[84px] w-[83px]" />
      </div>

      {/* ------------------------------------body------------------------------------ */}

      {/* ----------------------------------sidebar beigns------------------------------------ */}
      <div
        className={`h-full w-1/2 col-span-9 pl-5 bg-[#E8E8E8] z-10 shadow-lg shadow-[#807b7b] rounded-r-[20px] fixed top-0 left-0 ${
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
                  ? "bg-#0E4E48 text-white "
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
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen overflow-y-scroll col-span-3 bg-ejaice-form-bg pb-10 mt-40`}
      >
        dsgff
        ipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsiumipsium
        <Routes>
          <Route path="/Customer/cxvfvzx" element={null} />
          <Route path="/Customer/Czcxvxvv" element={null} />
          <Route path="/Customer/zxcvxv" element={null} />
          <Route path="/Customer/zxcv" element={null} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;


//  {
//    activeTab === 0 && <Riders />;
//  }
//  {
//    activeTab === 1 && <Agents />;
//  }