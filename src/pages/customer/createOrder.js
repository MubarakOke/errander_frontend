import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const CreateOrder = () => {
  const [hamburger, setHamburger] = React.useState(0);

  return (
    <div className="">
      <Navbar
        title="Create Order"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5">
          <input
            placeholder={"Name"}
            type={"text"}
            className="outline-none  p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
          />
          <input
            placeholder={"Quantity"}
            type={"text"}
            className="outline-none mt-4 p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="p-4 bg-[#D7EBE2]  w-[16%] rounded-full cursor-pointer">
            <BsPlusLg className="text-[#0E4E48] text-[26px]" />
          </div>
        </div>

        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <input
            placeholder={"Name"}
            type={"text"}
            className="outline-none  p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
          />
          <textarea
            rows="5"
            className="w-full outline-none p-4 mt-4 rounded-[25px] text-[#8E8E8E] bg-[#F2F2F2] font-medium "
          >
            Relevant details (optional)
          </textarea>
        </div>

        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <input
            placeholder={"Prefered Shop Name (Optional)"}
            type={"text"}
            className="outline-none  p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
          />
          <input
            placeholder={"Preferred Shop Location (Optional)"}
            type={"text"}
            className="outline-none mt-4 p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
          />
        </div>
        <div className="mt-10 flex items-center justify-end">
          <Link
            to="/Customer/OrderDetails"
            className="cursor-pointer  flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-medium font-[Roboto] w-1/2"
          >
            Preview Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
