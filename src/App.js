import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import ErranderSignUp from "./pages/Errander/signup/signUp";
import Admin from "./pages/Admin/index";
import CustomerSignUp from "./pages/customer/signUp";
import Home from "./pages/customer/home/home";
import Profile from "./pages/customer/Profile/profile";
import CustomerProfileEdit from "./pages/customer/Profile/CustomerProfileEdit";
import CreateOrder from "./pages/customer/createOrder";
import OrderDetails from "./pages/customer/orderDetails";
import Order from "./pages/customer/home/order";
import Running from "./pages/customer/home/running";
import History from "./pages/customer/home/history";
import { Toaster } from "react-hot-toast";
// import {toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

const App = () => {
  return (
    <div>
      {/* ----------------Notification Begins------------- */}
      <div>
        <Toaster
          toastOptions={{
            success: {
              duration: 5000,
              position: "top-center",
              style: { background: "#0E4E48", color: "white" },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: { background: "red", color: "white" },
            },
          }}
          containerStyle={{ top: 50 }}
        />
      </div>
      {/* ----------------Notification Ends------------- */}
      {/* -----------Routes Begins--------------- */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer/orderdetails" element={<OrderDetails />} />

        <Route path="/customer/home" element={<Home />}>
          <Route index element={<Order />} />
          <Route path="/customer/home/order" element={<Order />} />
          <Route path="/customer/home/running" element={<Running />} />
          <Route path="/customer/home/history" element={<History />} />
        </Route>
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/blog" element={null} />
        <Route path="/customer/zxcv" element={null} />
        <Route path="/customer/createorder" element={<CreateOrder />} />

        <Route path="/errander/signup" element={<ErranderSignUp />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/customerprofileedit" element={<CustomerProfileEdit />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
      </Routes>
      {/* -----------Routes Ends--------------- */}
    </div>
  );
};

export default App;
