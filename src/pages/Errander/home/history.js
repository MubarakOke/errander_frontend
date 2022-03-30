import React from "react";
import Modal from "../../../components/modal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const History = () => {
  return (
    <div>
      {" "}
      <Modal
        orderId="#30528"
        heading="Running"
        headingIcon={<MdOutlineRemoveRedEye />}
        headingIconColor="white"
        headingColor="#62C78A"
        arrowVisible={1}
        print={1}
        headingFrom="Mandate"
        headingTo="Oko-erin"
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
        bottonVisible={0}
        bottonTitle="Finish"
      />
    </div>
  );
};

export default History;
