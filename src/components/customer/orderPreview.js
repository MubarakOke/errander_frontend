import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateOrderAction } from "../../Redux/actionCreators/customers/orderAction";



const OrderPreview = ({fields, setContent}) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const date= Date()
  const RenderStockLists= ()=>{
      return Object.values(fields.stocks).map((stock, index)=>{
        return (
              <div key={index} className="text-[#0E4E48] text-[] font-bold grid grid-cols-3 gap-3 ">
              <span className="text-[#6D6D6D] text-[] font-bold">{stock.name}</span>
              <span className="text-[#6D6D6D] text-[] font-bold">{stock.quantity}</span>
              <span className="text-[#6D6D6D] text-[] font-bold">{stock.price}</span>
              </div>)       
          }
      )
    }

  const handleFormSubmit= (e)=>{
    e.preventDefault();
    console.log("submission")
    dispatch(CreateOrderAction(fields, navigate))
  }
  return (
    <div>
      {/* ------------------Back Button Starts-------------- */}
        <div>
          <div
            onClick={() => setContent(0)}
            className="p-4 bg-[#D7EBE2]  w-[16%] rounded-full cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <MdOutlineArrowBackIosNew className="text-[#0E4E48] text-[26px]" />
          </div>
        </div>
        {/* ------------------Back Button Ends-------------- */}
         {/* ---------------Address Information Starts------------- */}
         <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <span className="text-[] text-[#AFAFAF]">Address of order</span>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#FFAF2A]" />
            <span className="text-[18px] text-[#6D6D6D] font-bold ml-2">
            {fields.relevant.address}
            </span>
          </div>
          <div className="ml-6 flex items-center">
            <BiMessageDetail className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">
              {fields.relevant.message}
            </span>
          </div>
          <div className="ml-6 flex items-center">
            <AiOutlineShop className="text-[#CACACA]" />
            <span className="ml-3 text-[#848484] font-medium">{fields.preferred.shopName}</span>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#699BF7]" />
            <span className="text-[18px] text-[#6D6D6D] font-bold ml-2">
              {fields.preferred.shopLocation}
            </span>
          </div>
        </div>
        {/* ---------------Address Information Ends------------- */}
        {/* ----------------Stock Information Start------------------ */}
        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-6">
          <div className="flex items-center">
            <FaCalendarAlt className="text-[#0E4E48]" />
            <span className="text-[#0E4E48] text-[] ml-2 font-bold">
              Ordering time
            </span>
          </div>
          <div className="ml-6 text-[#6D6D6D] font-medium">
            {date}
          </div>
          <div className="flex items-center mt-2">
            <MdInventory2 className="text-[#0E4E48]" />
            <span className="text-[#0E4E48] text-[] ml-2 font-bold">Item</span>
          </div>
          <div className="ml-6">
            <div className="text-[#0E4E48] text-[] font-bold grid grid-cols-3 gap-3 ">
              <span className="text-[#0E4E48] text-[] font-bold">Name</span>
              <span className="text-[#0E4E48] text-[] font-bold">Quantity</span>
              <span className="text-[#0E4E48] text-[] font-bold">Price</span>
        </div>
            {
            RenderStockLists()
            }
            
          </div>
        </div>
        {/* ----------------Stock Information End------------------ */}
       
        {/* ---------------Submit Button Starts----------------- */}
        <button onClick={handleFormSubmit} className="cursor-pointer mt-10 flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-medium font-[Roboto] w-full">
          Submit
        </button>
        {/* ---------------Submit Button Ends----------------- */}
      </div>
  );
};

export default OrderPreview;
