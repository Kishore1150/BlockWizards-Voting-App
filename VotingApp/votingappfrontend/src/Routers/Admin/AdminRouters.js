import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../CommonSection/Navbar";
import AdminHome from "../../Pages/Admin/Home";
const AdminRouters = () => {
  return (
    <>
      <BrowserRouter basename="admin">
        <Navbar />
        <Routes>
          <Route path="/" component={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AdminRouters;
