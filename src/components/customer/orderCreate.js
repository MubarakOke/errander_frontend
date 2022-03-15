import React from 'react'
import { BsPlusLg } from "react-icons/bs";
import StockForm from "../../components/customer/stockForm"


const orderCreate= ({stockcount, setStockcount, fields, setFields, setPage})=> {

  const StockForms=()=>{
    const stockList=[]
    for(let i=0; i<=stockcount; i++ ){
      stockList.push(<StockForm key={i} fields={fields} setFields={setFields} i={i}/>)
    }
    return stockList;
  }

  return (
    <div>
        {/* -------------------Stock Information Start----------------- */}
        {
         StockForms()
        }
        {/* -------------------Stock Information End----------------- */}
        {/* -------------------Add More Stock Button Start----------------- */}
        <div className="flex justify-center items-center mt-4">
          <div className="p-4 bg-[#D7EBE2]  w-[16%] rounded-full cursor-pointer">
            <BsPlusLg onClick={()=>{setStockcount(stockcount+1)}} className="text-[#0E4E48] text-[26px]" />
          </div>
        </div>
        {/* -------------------Add More Stock Button End----------------- */}
        {/* -------------------Relevant Information Start----------------- */}
        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <input
            placeholder={"Address to deliver to"}
            type={"text"}
            value={fields.relevant.address}
            className="outline-none  p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
            onChange={(e)=>setFields({...fields, relevant:{...fields.relevant, address:e.target.value}})}
          />
          <textarea
            rows="3"
            placeholder="Relevant details (optional)"
            className="w-full outline-none p-4 mt-4 rounded-[25px] text-[#8E8E8E] bg-[#F2F2F2] font-medium"
            value={fields.relevant.message}
            onChange={(e)=>setFields({...fields, relevant:{...fields.relevant, message:e.target.value}})}
          />
        </div>
        {/* -------------------Relevant Information End----------------- */}
        {/* -------------------Location Information Start----------------- */}
        <div className="flex flex-col bg-[#fff] shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] rounded-[30px] px-6 py-5 mt-4">
          <input
            placeholder={"Prefered Shop Name (Optional)"}
            type={"text"}
            className="outline-none  p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
            value={fields.preferred.shopName}
            onChange={(e)=>setFields({...fields, preferred:{...fields.preferred, shopName:e.target.value}})}
          />
          <input
            placeholder={"Preferred Shop Location (Optional)"}
            type={"text"}
            className="outline-none mt-4 p-2 font-medium bg-[#F2F2F2] w-full rounded-[50px] text-[#8E8E8E]"
            value={fields.preferred.shopLocation}
            onChange={(e)=>setFields({...fields, preferred:{...fields.preferred, shopLocation:e.target.value}})}
          />
        </div>
        
        {/* -------------------Location Information Start----------------- */}
        {/* -------------------Preview Order Button Start----------------- */}
        <div className="mt-10 flex items-center justify-end">
            <button onClick={()=>setPage(1)} className="cursor-pointer  flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-medium font-[Roboto] w-1/2"> 
            Preview Order
            </button>
        </div>
        {/* -------------------Preview Order Button Start----------------- */}
    </div>
  )
}

export default orderCreate;