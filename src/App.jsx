import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navvbar from "./components/Navvbar.jsx";
import Home from "./pages/Home";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "https://mern-authserver.onrender.com";
axios.defaults.withCredentials = true;
function App() {

  return (
    <div>
     <Toaster position='bottom-right' toastOptions={{duration:2000}} />
      
      <UserContextProvider>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
