import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import OrderCreate from "../../components/customer/orderCreate";
import OrderPreview from "../../components/customer/orderPreview";

const CreateOrder = () => {
  const [hamburger, setHamburger] = useState(0);
  const [stockcount, setStockcount] = useState(0);
  const [page, setPage] = useState(0);
  const [fields, setFields] = useState({
    stocks: {},
    relevant: {},
    preferred: {},
  });

  const RenderStep = () => {
    switch (page) {
      case 0:
        return (
          <OrderCreate
            stockcount={stockcount}
            setStockcount={setStockcount}
            fields={fields}
            setFields={setFields}
            setPage={setPage}
          />
        );
      case 1:
        return <OrderPreview fields={fields} setPage={setPage} />;
      default:
        return;
    }
  };

  return (
    <div>
      {/* ---------------Navbar Starts--------------- */}
      <Navbar
        title="Create Order"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      {/* ---------------Navbar Ends--------------- */}
      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        {/* ---------------Page Rendering Starts--------------- */}
        {RenderStep()}
        {/* ---------------Page Rendering Ends--------------- */}
      </div>
    </div>
  );
};

export default CreateOrder;
