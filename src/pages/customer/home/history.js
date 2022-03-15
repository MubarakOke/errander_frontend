import React from "react";
import Modal from "../../../components/modal";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const History = () => {
  return (
    <div className="pb-12">
      <Modal
        orderId="#30528"
        heading="Completed"
        headingIcon={<MdOutlineKeyboardArrowUp />}
        headingIconColor="white"
        headingColor="#62C78A"
        arrowVisible={1}
        headingFrom="Mandate"
        headingTo="Oko-erin"
        calender="2020/03/27 - 09:00"
        phone="0909999999"
        rider="Lawal Alaba"
        print={1}
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
        heading="Completed"
        headingIcon={<MdOutlineKeyboardArrowUp />}
        headingIconColor="white"
        headingColor="#FF6666"
        arrowVisible={1}
        headingFrom="Mandate"
        headingTo="Oko-erin"
        calender="2020/03/27 - 09:00"
        phone="0909999999"
        rider="Lawal Alaba"
        print={1}
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
    </div>
  );
};

export default History;
