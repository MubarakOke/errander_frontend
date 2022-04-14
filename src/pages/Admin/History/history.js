import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const History = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activetab, setActivetab] = React.useState(0);

  return (
    <div>
      <Navbar
        title="History"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="admin"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-5`}
      >
        <div className="w-[80%] mx-auto mb-4">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/admin/history/today"
              onClick={() => setActivetab(0)}
              className={`${
                activetab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Today
            </Link>
            <Link
              to="/admin/history/thisweek"
              onClick={() => setActivetab(1)}
              className={`${
                activetab === 1
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              This week
            </Link>
            <Link
              to="/admin/history/date"
              onClick={() => setActivetab(2)}
              className={`${
                activetab === 2
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Date
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

export default History;
