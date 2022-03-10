import React from "react";
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
        } h-screen pt-[150px]  z-0 px-8`}
      >
        <div>
          <div className="flex items-center justify-between w-full ">
            <div
              onClick={() => {
                handleTab(0);
              }}
              className={`${
                activeTab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Order
            </div>
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </div>

        <div className="font-[Roboto]">
          {activeTab === 0 && <Order />}
          {activeTab === 1 && <Running />}
          {activeTab === 2 && <History />}
        </div>
      </div>
    </div>
  );
};

export default Index1;
