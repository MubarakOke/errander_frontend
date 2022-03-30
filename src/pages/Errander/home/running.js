import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Modal from "../../../components/modal";

const Running = () => {
  return (
    <div>
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
        bottonVisible={1}
        bottonTitle="Finish"
      />
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
        bottonVisible={1}
        bottonTitle="Finish"
      />
    </div>
  );
};

export default Running;
