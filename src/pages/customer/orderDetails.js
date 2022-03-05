import React from "react";
import Navbar from "../../components/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const OrderDetails = () => {
    const Back=useNavigate();
  const [hamburger, setHamburger] = React.useState(0);
  return (
    <div>
      <Navbar
        title="Order details"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        <div>
          <div
            onClick={() => Back(-1)}
            className="p-4 bg-[#D7EBE2]  w-[16%] rounded-full cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <MdOutlineArrowBackIosNew className="text-[#0E4E48] text-[26px]" />
          </div>
        </div>

        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <span className="text-[] text-[#AFAFAF]">Address of order</span>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#FFAF2A]" />
            <span className="text-[18px] text-[#6D6D6D] font-bold ml-2">
              23, mandate 3, ilorin
            </span>
          </div>

          <div className="ml-6 flex items-center">
            <HiUser className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">
              Push Puttichai
            </span>
          </div>

          <div className="ml-6 flex items-center">
            <BsPhone className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">0123456789</span>
          </div>

          <div className="ml-6 flex items-center">
            <BiMessageDetail className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">
              Make sure the orders are complete ooo
            </span>
          </div>
          <div className="ml-6 flex items-center">
            <AiOutlineShop className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">Shoprite</span>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#699BF7]" />
            <span className="text-[18px] text-[#6D6D6D] font-bold ml-2">
              5, Oja tuntun, Ilorin
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-6">
          <div className="flex items-center">
            <FaCalendarAlt className="text-[#0E4E48]" />
            <span className="text-[#0E4E48] text-[] ml-2 font-bold">
              Ordering time
            </span>
          </div>
          <div className="ml-6 text-[#6D6D6D] font-medium">
            2020/03/20 - 09:00
          </div>
          <div className="flex items-center mt-2">
            <MdInventory2 className="text-[#0E4E48]" />
            <span className="text-[#0E4E48] text-[] ml-2 font-bold">Item</span>
          </div>
          <div className="ml-6">
            <div className="text-[#0E4E48] text-[] font-bold grid grid-cols-3 gap-3 ">
              <span className="text-[#0E4E48] text-[] font-bold">Name</span>
              <span className="text-[#0E4E48] text-[] font-bold">Quantity</span>
            </div>

            <div className="text-[#0E4E48] text-[] font-bold grid grid-cols-3 gap-3 ">
              <span className="text-[#6D6D6D] text-[] font-bold">indomie</span>
              <span className="text-[#6D6D6D] text-[] font-bold">12 packs</span>
              <span className="text-[red] text-[] font-medium">remove</span>
            </div>
            <div className="text-[#0E4E48] text-[] font-bold grid grid-cols-3 gap-3 ">
              <span className="text-[#6D6D6D] text-[] font-bold">indomie</span>
              <span className="text-[#6D6D6D] text-[] font-bold">12 packs</span>
              <span className="text-[red] text-[] font-medium">remove</span>
            </div>
          </div>
        </div>

        <Link
          to=""
          className="cursor-pointer mt-10 flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-medium font-[Roboto] "
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
