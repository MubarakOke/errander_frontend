import React from "react";

const content = [
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
  {
    name: "Lawal yousuf",
    id: "121",
    location: "lagos",
    action1: "Verify",
    action2: "Decline",
  },
];

const ErranderMonitor = () => {
  const [subtab, setSubtab] = React.useState(0);
  return (
    <div>
      <div className="shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] p-3 mt-3">
        {/* --------------------Tabs start----------------------------------- */}
        <div className="w-[90%] mx-auto mb-4">
          <div className="flex items-center justify-between w-full">
            <div
              onClick={() => setSubtab(0)}
              className={`${
                subtab === 0
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Request
            </div>
            <div
              onClick={() => setSubtab(1)}
              className={`${
                subtab === 1
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Verified
            </div>
            <div
              onClick={() => setSubtab(2)}
              className={`${
                subtab === 2
                  ? "text-[#0E4E48] font-semibold border-b-2 border-[#0E4E48]"
                  : "text-[#999A9A]"
              } cursor-pointer transition duration-300 font-[Roboto] font-bold text-[18px]`}
            >
              Declined
            </div>
          </div>
        </div>

        {/* --------------------Tabs Ends---------------------------------- */}

        {/* --------------------Table start---------------------------------- */}
        {/* --------------------Table tab1 contents---------------------------------- */}

        {subtab === 0 && (
          <div>
            <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2">
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander Name
              </div>
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander ID
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
                    <div className="text-center text-[#05365A]">
                      {value.name}
                    </div>
                    <div className="text-center text-[#05365A]">{value.id}</div>
                    <div className="text-center text-[#05365A]">
                      <div className="flex justify-between rounded-[29px] overflow-hidden text-[#fff] w-[102px]">
                        <div className="bg-[#62C78A] pl-2 pr-1 py-2 text-[11px] cursor-pointer">
                          Verify
                        </div>
                        <div className="bg-[#FF6666] pl-1 pr-2 py-2 text-[11px] cursor-pointer">
                          Decline
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --------------------Table tab2 contents---------------------------------- */}

        {subtab === 1 && (
          <div>
            <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2">
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander Name
              </div>
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander ID
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
                    <div className="text-center text-[#05365A]">
                      {value.name}
                    </div>
                    <div className="text-center text-[#05365A]">{value.id}</div>
                    <div className=" text-center text-[#05365A] flex items-center justify-center">
                      <div className="bg-[#FF6666] rounded-[29px] text-[#fff] text-[11px] cursor-pointer px-3 py-2">
                        Decline
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* --------------------Table tab3 contents---------------------------------- */}

        {subtab === 2 && (
          <div>
            <div className="grid grid-cols-3 gap-1 bg-[#D7EBE2] py-2 px-1 mb-2">
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander Name
              </div>
              <div className="text-center text-[15px] font-black text-[#05365A] font-[Montserrat]">
                Errander ID
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
                    <div className="text-center text-[#05365A]">
                      {value.name}
                    </div>
                    <div className="text-center text-[#05365A]">{value.id}</div>
                    <div className=" text-center text-[#05365A] flex items-center justify-center">
                      <div className="bg-[#62C78A] rounded-[29px] text-[#fff] text-[11px] cursor-pointer px-3 py-2">
                        Verify
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --------------------Table ends---------------------------------- */}
      </div>
    </div>
  );
};

export default ErranderMonitor;

//colh1, colh2, colh3, content, contentName
