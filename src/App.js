import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
const AppRoutes = () => {
    return (
      <>
  
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    );
  };
  
  export default AppRoutes;
  
