import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../CommonSection/Navbar";
import Home from "../../Components/Home/Home";
import AdminHome from "../../Pages/Admin/Home";
import addCandidate from "../../Components/Admin/Addcandidate";
import Footer from "../../CommonSection/Footer";

import Contact from "../../Components/Contact/Contact";
import Voters from "../../Pages/Voters/Voters";
import Signup from "./SignUp";
const VotersRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/usersvote" element={<Voters />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default VotersRouters;
