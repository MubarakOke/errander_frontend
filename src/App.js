import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
