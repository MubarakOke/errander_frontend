import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const CreateOrder = () => {
  const [hamburger, setHamburger] = React.useState(0);

  return (
    <div className="">
      <Navbar
        title="Create Order"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-12`}
      >
        <div className="rounded">
          <input
            placeholder={"Name"}
            type={"text"}
            className="outline-none  p-2 mt-10 font-medium"
          />
          <input
            placeholder={"Quantity"}
            type={"text"}
            className="outline-none p-2 mt-10 font-medium"
          />
        </div>
     
          <BsPlusLg/>
        
      </div>
    </div>
  );
};

export default CreateOrder;
