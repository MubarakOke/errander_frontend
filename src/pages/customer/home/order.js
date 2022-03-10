import React from "react";
import OrderPreviewEmpty from "../../../components/order_preview_empty";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../../components/modal";
const Order = () => {
  return (
    <div>
      {/* <OrderPreviewEmpty /> */}
      <Modal />
      <div className="flex items-center justify-center">
        <div className="rounded-full bg-[#D7EBE2]  p-5 mt-12 cursor-pointer flex items-center justify-center w-[18%]">
          <Link to="/Customer/CreateOrder">
            <BsPlusLg className="text-[26px] text-[#0E4E48]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
