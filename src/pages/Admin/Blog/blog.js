import React from "react";
import Navbar from "../../../components/Navbar";
import { HiOutlinePencil } from "react-icons/hi";
import { Link } from "react-router-dom";




const content = [
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

const Blogger = () => {
  const [hamburger, setHamburger] = React.useState(0);
  return (
    <div>
      <Navbar
        title="Manage Blogger"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="admin"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-5`}
      >
        <div className="flex justify-end">
          <Link
            to="/admin/create_blogger"
            className="outline-none bg-[#62C78A] text-[white] flex justify-between items-center rounded-[29px] px-5 py-3 w-[180px] cursor-pointer"
          >
            <HiOutlinePencil className="text-[20px]" />
            Create Blogger
          </Link>
        </div>

        <div className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] p-3 mt-3">
          <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2 mt-4">
            <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
              Blogger Name
            </div>
            <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
              Phone Number
            </div>
            <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
              Action
            </div>
          </div>
          <div>
            {content.map((value, id) => {
              return (
                <div
                  key={id}
                  className="grid grid-cols-3 gap-3 border-b-[1px] py-2 hover:bg-[#EAF3EF] font-[Montserrat] font-medium text-[14px]"
                >
                  <div className="text-center text-[#05365A]">{value.name}</div>
                  <div className="text-center text-[#05365A]">
                    {value.phone}
                  </div>
                  <div className="text-center text-[red] cursor-pointer">
                    Delete
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogger;











  

