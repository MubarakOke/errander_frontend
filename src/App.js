import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Customer from "./pages/customer/index";
import Errander from "./pages/Errander/index";
import Admin from "./pages/Admin/index";
import CustomerSignUp from "./pages/customer/signUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer/*" element={<Customer />} />
        <Route path="/Errander" element={<Errander />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Customer/Signup" element={<CustomerSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
