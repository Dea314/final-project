import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

import React from "react";

function Landing() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Landing;
