import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Errander from "./pages/Errander/index";
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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer/OrderDetails" element={<OrderDetails />} />

        <Route path="/Customer/Home" element={<Home />}>
          <Route path="/Customer/Home/Order" element={<Order />} />
          <Route path="/Customer/Home/Running" element={<Running />} />
          <Route path="/Customer/Home/History" element={<History />} />
        </Route>
        <Route path="/Customer/Profile" element={<Profile />} />
        <Route path="/Customer/Blog" element={null} />
        <Route path="/Customer/zxcv" element={null} />
        <Route path="/Customer/CreateOrder" element={<CreateOrder />} />

        <Route path="/Errander" element={<Errander />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CustomerProfileEdit" element={<CustomerProfileEdit />} />
        <Route path="/Customer/Signup" element={<CustomerSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
