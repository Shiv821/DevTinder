import React from "react";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
