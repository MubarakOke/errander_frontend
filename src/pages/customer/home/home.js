import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../../../components/Navbar";
import AddOrderButton from "../../../components/customer/addOrderButton";
import { FetchOrderAction, sho } from "../../../Redux/actionCreators/customers/orderAction";



const Index1 = () => {
  const [hamburger, setHamburger] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState();
  const dispatch= useDispatch();
  const pathname = window.location.pathname;


  useEffect(()=>{
    dispatch(FetchOrderAction())
  }, []);

  const showAddOrderButton= ()=>{
    if(pathname.includes("customer/home/order")||activeTab===0){
      return <AddOrderButton/>
    }
    else{
      return
    }
  }

  return (
    <div>
      <Navbar
        title="Home"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      {/* ---------------Add Order Button Starts-------------- */}
      {showAddOrderButton()}
      {/* ---------------Add Order Button Ends-------------- */}
      {/* --------------Navigation begins------------------ */} 
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        {/*------------------top nav begins---------------- */}
        <div className="w-[80%] mx-auto ">
          <div className="flex items-center justify-between w-full">
            <Link
              onClick={()=>{setActiveTab(0)}}
              to="/customer/home/order"
              className={`${
                pathname.includes("customer/home/order")
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Order
            </Link>
            <Link
              to="/customer/home/running"
              onClick={()=>{setActiveTab(1)}}
              className={`${
                pathname.includes("customer/home/running")
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Running
            </Link>
            <Link
              to="/customer/home/history"
              onClick={()=>{setActiveTab(2)}}
              className={`${
                pathname.includes("customer/home/history")
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
