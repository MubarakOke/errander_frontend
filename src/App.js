import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Customer from "./pages/customer/index";
import Errander from "./pages/Errander/index";
import Admin from "./pages/Admin/index";
import CustomerSignUp from "./pages/customer/signUp";
import Home from "./pages/customer/home/home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer" element={<Customer />}>
          <Route path="/Customer/Home" element={<Home />} />
          <Route path="/Customer/Profile" element={null} />
          <Route path="/Customer/Blog" element={null} />
          <Route path="/Customer/zxcv" element={null} />
        </Route>
        <Route path="/Errander" element={<Errander />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Customer/Signup" element={<CustomerSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
