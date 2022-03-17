import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import OrderCreate from "../../components/customer/orderCreate";
import OrderPreview from "../../components/customer/orderPreview";

const CreateOrder = () => {
  const [hamburger, setHamburger] = useState(0);
  const [content, setContent]= useState(0)
  const [stockcount, setStockcount] = useState({count:0, index:0});
  const [fields, setFields]= useState({
                                      stocks: {},
                                      relevant: {},
                                      preferred:{},
                                      })
  

  const RenderContent=()=>{
    switch (content){
      case 0:
        return <OrderCreate stockcount={stockcount} setStockcount={setStockcount} fields={fields} setFields={setFields} setContent={setContent}/>;
      case 1:
        return <OrderPreview fields={fields} setContent={setContent}/>;
      default:
        return;
    }
  };

  return (
    <div>
      {/* ---------------Navbar Starts--------------- */}
      <Navbar
        title={content===0?"Create Order":"Preview Order"}
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />
      {/* ---------------Navbar Ends--------------- */}
      <div className={`${hamburger ? "blur-sm" : "blur-none"} h-screen pt-[150px]  z-0 px-6`}>
      {/* ---------------Content Rendering Starts--------------- */}
        {RenderContent()}
      {/* ---------------Content Rendering Ends--------------- */}
      </div>
    </div>
  );
};

export default CreateOrder;
