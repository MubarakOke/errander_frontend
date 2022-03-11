import React from "react";
import OrderPreviewEmpty from "../../../components/order_preview_empty";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import Modal from "../../../components/modal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
const Order = () => {
  return (
    <div>
      {/* <OrderPreviewEmpty /> */}
      <Modal
        orderId="#30528"
        heading="Running"
        headingIcon={<MdOutlineRemoveRedEye />}
        headingIconColor="white"
        headingColor="#62C78A"
        arrowVisible={1}
        print={0}
        headingFrom="Tanke"
        headingTo="Asadam"
        calender="2020/03/27 - 09:00"
        phone="0909999999"
        rider="Lawal Alaba"
        message="Please make sure the order are complete o"
        shopName="Shoprite"
        items={[
          {
            name: "indomie",
            quantity: "12 packs",
          },
          {
            name: "yam",
            quantity: "13 pieces",
          },
          {
            name: "fish",
            quantity: "14 pieces",
          },
        ]}
      />

      <Modal
        orderId="#30528"
        heading="Initiated"
        headingIcon={<ImCancelCircle />}
        headingIconColor="red"
        headingColor="#FDBC3F"
        arrowVisible={0}
        headingFrom="Tanke"
        calender="2020/03/27 - 09:00"
        phone="0909999999"
        rider=""
        message=""
        shopName=""
        items={[
          {
            name: "indomie",
            quantity: "12 packs",
          },
          {
            name: "yam",
            quantity: "13 pieces",
          },
          {
            name: "fish",
            quantity: "14 pieces",
          },
        ]}
      />

      <div className="flex items-center justify-center">
        <div className="rounded-full bg-[#D7EBE2]  p-5 mt-12 mb-12 cursor-pointer flex items-center justify-center w-[18%]">
          <Link to="/Customer/CreateOrder">
            <BsPlusLg className="text-[26px] text-[#0E4E48]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
