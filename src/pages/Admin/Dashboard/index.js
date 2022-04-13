import React from "react";
import Navbar from "../../../components/Navbar";
import { AiFillCar } from "react-icons/ai";
import { BiTrip } from "react-icons/bi";
import Dash from "./admin_dash_components";
import DashboardInfo from "./dashboardInfo_components";

const errander = [
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
  },
];
const customer = [
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
  {
    name: "Lawal yousuf",
    phone: "091234567889",
    location: "lagos",
  },
];

const Index = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activetab, setActivetab] = React.useState(0);
  return (
    <div>
      <Navbar
        title="Dashboard"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="admin"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-5`}
      >
        {/* --------------------Dash begins-------------------------- */}
        <div className="flex justify-between">
          <Dash value={0} icon={<AiFillCar />} head="Active Erranders" />
          <Dash value={0} icon={<BiTrip />} head="Total Errand" />
        </div>
        {/* --------------------Dash ends-------------------------- */}

        {/* -----------------content begins-------------------------- */}

        <div className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] p-3 mt-3">
          {/* --------------------Tabs start----------------------------------- */}
          <div className="w-[90%] mx-auto mb-4">
            <div className="flex items-center justify-between w-full">
              <div
                onClick={() => setActivetab(0)}
                className={`${
                  activetab === 0
                    ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                    : "text-[#999A9A]"
                } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
              >
                Errander
              </div>
              <div
                onClick={() => setActivetab(1)}
                className={`${
                  activetab === 1
                    ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                    : "text-[#999A9A]"
                } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
              >
                Customer
              </div>
              <div
                onClick={() => setActivetab(2)}
                className={`${
                  activetab === 2
                    ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                    : "text-[#999A9A]"
                } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
              >
                Activity
              </div>
            </div>
          </div>
          {/* --------------------Tabs ends----------------------------------- */}
          {/* ------------------Table starts--------------------- */}

          {activetab === 0 && (
            <DashboardInfo
              colh1="Errander Name"
              colh2="Errander ID"
              colh3="Location"
              content={errander}
              contentName="errander"
            />
          )}
          {activetab === 1 && (
            <DashboardInfo
              colh1="Customer Name"
              colh2="Phone Number"
              colh3="Location"
              content={customer}
              contentName="customer"
            />
          )}
          {activetab === 2 && (
            <DashboardInfo
              colh1="Errander Name"
              colh2="Errander ID"
              colh3="Location"
              content={errander}
              contentName="errander"
            />
          )}

          {/* ------------------Table ends--------------------- */}
        </div>

        {/* ------------------------Content End------------------- */}
      </div>
    </div>
  );
};

export default Index;
