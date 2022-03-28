import React from "react";
import { Link } from "react-router-dom";

const Page1 = ({ setContent, content }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-[30px] font-bold text-[#595959] font-[Roboto]">
          Register
        </span>
        <div className="text-[#8A8B8B] opacity-50 font-semibold font-[poppins]">
          {`${content + 1} of 6`}
        </div>
      </div>

      <div className="font-bold mt-4">
        <span className="text-base text-[#8A8B8B]">
          Already have an account?
        </span>

        <Link to="/" className="text-[#F38484] font-[poppins]">
          {" "}
          Sign in!
        </Link>
      </div>
      {/* -------------------------input value--------------------- */}
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Full Name
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Email
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Phone Number
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Home Address
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Local Government Area
        </label>
      </div>
      <div className="relative group mt-8">
        <input
          type="text"
          required
          className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
        />
        <label className="text-[#8A8B8B] font-[poppins] transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
          Home Address
        </label>
      </div>
      {/* -------------------------input value--------------------- */}

      {/* ---------------------Next------------------------ */}
      <div className="flex justify-end mt-6">
        <div
          onClick={() => setContent("add")}
          className="rounded-[6px] font-[roboto] bg-[#0E4E48] text-[#fff] py-2 px-8 font-semibold text-[18px] cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Page1;
