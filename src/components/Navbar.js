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

const adminSidebarContent = [
  {
    link: "/Customer/Home",
    icon: dashboard,
    title: "Dashboard",
  },
  {
    link: "/Customer/Profile",
    icon: monitor,
    title: "Monitor",
  },

  {
    link: "/Customer/Blog",
    icon: history,
    title: "History",
  },

  {
    link: "/Customer/Logout",
    icon: logout,
    title: "Logout",
  },
];

const erranderSidebarContent = [
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
    link: "/Customer/Logout",
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
          </Link>
        );
      });
    } else if (show === "admin") {
      return adminSidebarContent.map((item, idx) => {
        return (
          <Link
            to=""
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
          </Link>
        );
      });
    } else if (show === "errander") {
      return erranderSidebarContent.map((item, idx) => {
        return (
          <Link
            to=""
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
          </Link>
        );
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (HeaderRef.current.contains(e.target)) {
        return;
      }

      handleHamburger(0);
    });
  }, []);

  //   const [hamburger, setHamburger] = React.useState(0);

  const handleHamburger = (a) => {
    setHamburger(a);
  };
  const pathname = window.location.pathname;
 {
//    ----------------------------Return begins----------------------------- 
 }
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