import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import ErranderSignUp from "./pages/Errander/signup/signUp";
import Admin from "./pages/Admin/index";
import CustomerSignUp from "./pages/customer/signUp";
import Home from "./pages/customer/home/home";
import ErranderHome from "./pages/Errander/home/home";
import Profile from "./pages/customer/Profile/profile";
import ErranderProfile from "./pages/Errander/profile/profile";
import CustomerProfileEdit from "./pages/customer/Profile/CustomerProfileEdit";
import ErranderProfileEdit from "./pages/Errander/profile/ErranderProfileEdit";
import CreateOrder from "./pages/customer/createOrder";
import OrderDetails from "./pages/customer/orderDetails";
import Order from "./pages/customer/home/order";
import Running from "./pages/customer/home/running";
import History from "./pages/customer/home/history";
import Errand from "./pages/Errander/home/errand";
import ErranderHistory from "./pages/Errander/home/history";
import ErranderRunning from "./pages/Errander/home/running";
import LoadingOverlay from 'react-loading-overlay'
import SyncLoader from 'react-spinners/SyncLoader'
import { Toaster } from "react-hot-toast";
// import {toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

const App = () => {
  return (
    <div>
      {/* ----------------Notification Begins------------- */}
      <LoadingOverlay
        active={false}
        spinner={<SyncLoader color={'#0E4E48'}/>}
        styles={{
          overlay: (base) => ({
            ...base,
            position: 'fixed'
            })
          }}
       >

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
        <Route path="/errander/home" element={<ErranderHome />}>
          <Route index element={<Errand />} />
          <Route path="/errander/home/errand" element={<Errand />} />
          <Route path="/errander/home/running" element={<ErranderRunning />} />
          <Route path="/errander/home/history" element={<ErranderHistory />} />
        </Route>
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/errander/profile" element={<ErranderProfile />} />

        <Route path="/customer/blog" element={null} />
        <Route path="/customer/zxcv" element={null} />
        <Route path="/customer/createorder" element={<CreateOrder />} />

        <Route path="/errander/signup" element={<ErranderSignUp />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/customerprofileedit" element={<CustomerProfileEdit />} />
        <Route path="/erranderprofileedit" element={<ErranderProfileEdit />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
      </Routes>
      {/* -----------Routes Ends--------------- */}
      </LoadingOverlay>
    </div>
  );
};

export default App;
