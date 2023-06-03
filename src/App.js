import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import Login from "./components/login/Login";
import Register from "./components/signup/Register";
import LoginOTP from "./components/login/LoginOTP";
import RegisterOTP from "./components/signup/RegisterOTP";
import Dashboard from "./components/dashboard/Dashboard";
import Sucess from "./components/sucess/Sucess";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Login />} index />
            <Route path="verify-email" element={<LoginOTP />} />
            <Route path="register-user" element={<Register />} />
            <Route path="verify-user" element={<RegisterOTP />} />
            <Route path="sucessfully-verified" element={<Sucess />} />
        {userLoggedIn && (
          <>
            <Route path="home" element={<Dashboard />} />
          </>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
