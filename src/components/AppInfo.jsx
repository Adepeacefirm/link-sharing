import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "./Profile";
import Preview from "../pages/Preview";
import Navbar from "./Navbar";

const AppInfo = () => {
  const location = useLocation();
  const hideNavbar = ["/preview"].includes(location.pathname);
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default AppInfo;
