import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  BsCalendar2DayFill,
  BsFillChatSquareTextFill,
  BsArrowRight,
} from "react-icons/bs";
import { AiFillPhone, AiTwotoneShop } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";

const Modal = ({
  orderId,
  heading,
  headingIcon,
  headingIconColor,
  headingColor,
  arrowVisible,
  headingFrom,
  headingTo,
  calender,
  phone,
  rider,
  message,
  shopName,
  items,
  print,
}) => {
  return (
    <div>
      {/* ====================Modal Start============================= */}
      <div className="mt-5">
        <div className="flex justify-between bg-[#fff] shadow-[-50px_-22px_78px_-23px_rgba(0,0,0,0.25)] rounded-t-[30px] mt-4 ">
          <div className="flex flex-row p-5 font-bold text-[#616262]">
            Order {orderId}
          </div>
          <div className="flex flex-row p-5">
            <IoIosArrowDown className="text-[24px]" />
          </div>

          <div
            className={`flex items-center justify-center bg-[${headingColor}] w-2/5 p-5 rounded-tr-[30px] rounded-bl-[15px]`}
          >
            <span className="text-[15px] font-bold text-[white]">
              {heading}
            </span>

            <div className={`ml-2 text-[20px] text-[${headingIconColor}]`}>
              {headingIcon}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#fff] shadow-[-26px_64px_97px_-5px_rgba(0,0,0,0.25)] rounded-b-[30px] px-5 py-5">
          <div className="flex justify-between py-4 px-6 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#2c2c2c]">
            <span>{headingFrom}</span>{" "}
            {arrowVisible ? <BsArrowRight className="text-[24px]" /> : ""}{" "}
            <span>{headingTo}</span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            <div className="flex flex-col items-start col-span-2">
              {calender ? (
                <div className="flex">
                  <div>
                    <BsCalendar2DayFill className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{calender}</span>
                </div>
              ) : (
                ""
              )}
              {phone ? (
                <div className="flex mt-2">
                  <div>
                    <AiFillPhone className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{phone}</span>
                </div>
              ) : (
                ""
              )}
              {rider ? (
                <div className="flex mt-2">
                  <div>
                    <FaTruck className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{rider}</span>
                </div>
              ) : (
                ""
              )}
              {message ? (
                <div className="flex mt-2">
                  <div>
                    <BsFillChatSquareTextFill className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{message}</span>
                </div>
              ) : (
                ""
              )}
              {shopName ? (
                <div className="flex mt-2">
                  <div>
                    <AiTwotoneShop className="text-[#0E4E48]" />
                  </div>

                  <span className="ml-4 text-[14px]">{shopName}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-col ">
              <p className="font-bold text-[#0E4E48]">Name</p>
              {items.map((value, id) => {
                return (
                  <p className="text-[14px] mt-1" key={id}>
                    {value.name}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#0E4E48]">Quantity</span>
              {items.map((value, id) => {
                return (
                  <p className="text-[14px] mt-1" key={id}>
                    {value.quantity}
                  </p>
                );
              })}
            </div>
          </div>

          {print ? (
            <div>
              <div className="border-b-[1px] border-[#595959] border-dotted mt-8"></div>
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-[#4964D8] font-bold">Print receipt</h1>
                <div className="shadow-[0px_1px_4px_rgba(0,0,0,0.25)] p-2 rounded-full">
                  <BsArrowRight className="text-[26px] text-[#4964D8]" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* ====================Modal End============================= */}
    </div>
  );
};

export default Modal;
