import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Monitor = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activetab, setActivetab] = React.useState(0);
  
  return (
    <div>
      <Navbar
        title="Monitor"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="admin"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-5`}
      >
        <div className="w-[55%] mx-auto mb-4">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/admin/monitor/errander"
              onClick={() => setActivetab(0)}
              className={`${
                activetab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Errander
            </Link>
            <Link
              to="/admin/monitor/customer"
              onClick={() => setActivetab(1)}
              className={`${
                activetab === 1
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Customer
            </Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Monitor;
