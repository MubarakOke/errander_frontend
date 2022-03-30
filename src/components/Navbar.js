import React, { useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { RiLogoutCircleFill } from "react-icons/ri";
import { RiDashboard3Fill } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import Logo1 from "../Assets/image/Logo2.png";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const home = <AiFillHome />;
const profile = <FaUserAlt />;
const blog = <SiGooglemessages />;
const logout = <RiLogoutCircleFill />;
const dashboard = <RiDashboard3Fill />;
const monitor = <FiMonitor />;
const history = <AiOutlineHistory />;

const customerSidebarContent = [
  {
    link: "/customer/home/order",
    icon: home,
    title: "Home",
  },
  {
    link: "/customer/profile",
    icon: profile,
    title: "Profile",
  },

  {
    link: "/customer/blog",
    icon: blog,
    title: "Blog",
  },

  {
    link: "/customer/logout",
    icon: logout,
    title: "Logout",
  },
];

const adminSidebarContent = [
  {
    link: "/customer/home",
    icon: dashboard,
    title: "Dashboard",
  },
  {
    link: "/customer/profile",
    icon: monitor,
    title: "Monitor",
  },

  {
    link: "/customer/blog",
    icon: history,
    title: "History",
  },

  {
    link: "/customer/logout",
    icon: logout,
    title: "Logout",
  },
];

const erranderSidebarContent = [
  {
    link: "/errander/home",
    icon: home,
    title: "Home",
  },
  {
    link: "/errander/profile",
    icon: profile,
    title: "Profile",
  },

  {
    link: "#",
    icon: logout,
    title: "Logout",
  },
];

const Navbar = ({ title, hamburger, setHamburger, show }) => {
  const HeaderRef = useRef();

  const renderSidebarContent = () => {
    if (show === "customer") {
      return customerSidebarContent.map((item, idx) => {
        return (
          <Link
            to={item.link}
            key={idx}
            className={` flex text-base font-medium my-3 hover:bg-[] hover:text-white  rounded-l-md hover:shadow-sm hover:shadow-[#000000] p-2 ${
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
          </Link>
        );
      });
    } else if (show === "admin") {
      return adminSidebarContent.map((item, idx) => {
        return (
          <Link
            to={item.link}
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
          </Link>
        );
      });
    } else if (show === "errander") {
      return erranderSidebarContent.map((item, idx) => {
        return (
          <Link
            to={item.link}
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
          </Link>
        );
      });
    } else {
      return;
    }
  };

  const toggleNavbarBody=(e) => {
    if (HeaderRef.current && HeaderRef.current.contains(e.target)) {
      return;
    }
    handleHamburger(0);
  };

  useEffect(() => {
    document.body.addEventListener("click", toggleNavbarBody)
    
    return () =>{
      document.body.removeEventListener("click", toggleNavbarBody)
    }
  }, []);



  const handleHamburger = (a) => {
    setHamburger(a);
  };
  const pathname = window.location.pathname;
  
  return (
    <div>
      {/* -----------------------------Header begins------------------------------ */}
      <div
        onClick={(e) => {
          if (HeaderRef.current.contains(e.target)) {
            if (hamburger === 1) {
              handleHamburger(0);
            }
            return;
          }
          handleHamburger(0);
        }}
        ref={HeaderRef}
        className={`w-full rounded-b-[41px] p-6 bg-[#D7EBE2] flex items-center justify-between fixed top-0 z-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]  ${
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
          {title}
        </span>
        <img src={Logo1} alt="logo" className="h-[84px] w-[83px]" />
      </div>

      {/* ----------------------------------sidebar beigns------------------------------------ */}
      <div
        className={`h-full w-1/2 pl-5 bg-[#E8E8E8] z-20 shadow-lg shadow-[#807b7b] rounded-r-[20px] fixed top-0 left-0 ${
          hamburger ? " visible " : " hidden "
        }`}
      >
        <GrClose
          onClick={() => {
            handleHamburger(0);
          }}
          className="text-[#0E4E48] font-bold text-[24px] cursor-pointer my-14"
        />

        {renderSidebarContent()}
      </div>
    </div>
  );
};
export default Navbar;
