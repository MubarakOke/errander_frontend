import React from "react";
import Wall from "../Assets/image/wall.png";
import { useSelector, useDispatch } from "react-redux";
import { SignInAction } from "../Redux/actionCreators/signin/signinActions";

const OrderPreviewEmpty = () => {
  const {token } = useSelector((state) => state.signIn);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col justify-center items-center h-full mt-28">
      <img src={Wall} alt="wall" />
      <div className="flex flex-col mt-12 mb-12 text-[#AAAAAA] text-[21px] items-center font-bold">
        <span>You have no orders! </span>
        <span>Create orders now.</span>
        {token}
      </div>
    </div>
  );
};


export default OrderPreviewEmpty;