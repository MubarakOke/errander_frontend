import React from "react";

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
const CustomerMonitor = () => {
  return (
    <div>
      <div className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] p-3 mt-3">
        <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2 mt-4">
          <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
           Customer Name
          </div>
          <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
            Phone Number
          </div>
          <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
            Location
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
                <div className="text-center text-[#05365A]">{value.phone}</div>
                <div className="text-center text-[#05365A]">{value.location}</div>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerMonitor;
