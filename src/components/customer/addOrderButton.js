import React from 'react'
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

const AddOrderButton= () => {

  return (
    <div className="flex items-center justify-center">
        <div className="rounded-full fixed bottom-[20px] z-10 bg-[#D7EBE2] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-5 mt-12 mb-12 cursor-pointer flex items-center justify-center h-[70px] w-[70px]">      
          <Link to="/Customer/CreateOrder">
            <BsPlusLg className="text-[32px] text-[#0E4E48]" />
          </Link>
        </div>
    </div>
  )
}

export default AddOrderButton