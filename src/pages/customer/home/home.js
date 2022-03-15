import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import AddOrderButton from "../../../components/customer/addOrderButton";

const Index1 = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTab = (id) => {
    setActiveTab(id);
  };


  return (
    <div>
      <Navbar
        title="Home"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      {/* ---------------add order button---------------- */}
      {activeTab===0&&<AddOrderButton/>}
      {/* --------------Router begins------------------ */} 
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        {/*------------------top nav begins---------------- */}
        <div className="w-[70%] mx-auto ">
          <div className="flex items-center justify-between w-full">
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
        {/* ----------------page menu switching---------------- */}
        <div className="font-[Roboto]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Index1;
