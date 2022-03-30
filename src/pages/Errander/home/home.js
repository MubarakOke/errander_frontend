import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const Index1 = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activetab, setActivetab] = React.useState(0);

  return (
    <div>
      <Navbar
        title="Home"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="errander"
      />

      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        {/*------------------top nav begins---------------- */}
        <div className="w-[80%] mx-auto ">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/errander/home/errand"
              onClick={() => setActivetab(0)}
              className={`${
                activetab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Errand
            </Link>
            <Link
              to="/errander/home/running"
              onClick={() => setActivetab(1)}
              className={`${
                activetab === 1
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Running
            </Link>
            <Link
              onClick={() => setActivetab(2)}
              to="/errander/home/history"
              className={`${
                activetab === 2
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
