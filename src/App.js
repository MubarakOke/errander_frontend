import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Customer from "./pages/customer/index";
import Errander from "./pages/Errander/index";
import Admin from "./pages/Admin/index";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Errander" element={<Errander />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
