import React, { useEffect } from "react";
import OrderPreviewEmpty from "../../../components/order_preview_empty";
import Modal from "../../../components/modal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";

const Order = () => {
  const orders = useSelector((state) => state.orders);

  const renderList = () => {
    return Object.values(orders).map((order, index) => {
      return (
        <Modal
          key={index}
          orderId={order.id}
          heading={order.status}
          status={order.status}
          headingIcon={
            order.status === "running" ? (
              <MdOutlineRemoveRedEye size="25px" />
            ) : (
              <ImCancelCircle size="25px" />
            )
          }
          headingIconColor={order.status === "running" ? "white" : "red"}
          headingColor={order.status === "running" ? "#62C78A" : "#FDBC3F"}
          arrowVisible={1}
          print={0}
          headingFrom={order.address}
          headingTo={order.preferred_shop_location}
          calender={order.date_completed}
          errander={order.errander}
          customer={order.customer}
          phone="0909999999"
          rider="Lawal Alaba"
          message={order.relevant_detail}
          shopName={order.preferred_shop}
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
      );
    });
  };

  useEffect(() => {});

  const renderContent = () => {
    const list = renderList();
    if (list.length === 0) {
      return (
        <OrderPreviewEmpty
          title1="You have no orders!"
          title2="Create orders now."
        />
      );
    }
    return list;
  };

  return <div>{renderContent()}</div>;
};

export default Order;

{
  /* <Modal
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
      /> */
}
