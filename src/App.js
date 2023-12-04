import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import Header from "./Components/Header";
const AppRoutes = () => {
    return (
      <>
  
        <Router>
          <Header></Header>
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<Register />} />
         
           
          </Routes>
        </Router>
      </>
    );
  };
  
  export default AppRoutes;
  
