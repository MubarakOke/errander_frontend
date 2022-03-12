import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import History from "./history";
import Order from "./order";
import Running from "./running";

const Index1 = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTab = (id) => {
    setActiveTab(id);
  };

  const pathName = window.location.pathName;
  return (
    <div>
      <Navbar
        title="Home"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      {/* --------------Router begins------------------ */}

      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        <div>
          <div className="flex items-center justify-between w-full ">
            <Link
              onClick={() => {
                handleTab(0);
              }}
              to="/Customer/Home/Order"
              className={`${
                activeTab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Order
            </Link>
            <Link
              to="/Customer/Home/Running"
              onClick={() => {
                handleTab(1);
              }}
              className={`${
                activeTab === 1
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Running
            </Link>
            <Link
              to="/Customer/Home/History"
              onClick={() => {
                handleTab(2);
              }}
              className={`${
                activeTab === 2
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              History
            </Link>
          </div>
        </div>

        <div className="font-[Roboto]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index1;
