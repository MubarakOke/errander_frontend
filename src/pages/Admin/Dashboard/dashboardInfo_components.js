import React from "react";

const ErranderInfo = ({ colh1, colh2, colh3, content, contentName }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2">
        <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
          {colh1}
        </div>
        <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
          {colh2}
        </div>
        <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
          {colh3}
        </div>
      </div>
      <div>
        {contentName === "errander" &&
          content.map((value, id) => {
            return (
              <div
                key={id}
                className="grid grid-cols-3 gap-3 border-b-[1px] py-2 hover:bg-[#EAF3EF] font-[Montserrat]"
              >
                <div className="text-center text-[#05365A]">{value.name}</div>
                <div className="text-center text-[#05365A]">{value.id}</div>
                <div className="text-center text-[#05365A]">
                  {value.location}
                </div>
              </div>
            );
          })}
        {contentName === "customer" &&
          content.map((value, id) => {
            return (
              <div
                key={id}
                className="grid grid-cols-3 gap-3 border-b-[1px] py-2 font-[Montserrat]"
              >
                <div className="text-center text-[#05365A]">{value.name}</div>
                <div className="text-center text-[#05365A]">{value.phone}</div>
                <div className="text-center text-[#05365A]">
                  {value.location}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ErranderInfo;
