import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Main</NavLink>
      <NavLink to="playground">Playground</NavLink>
      <NavLink to="documents">Docs</NavLink>
      <NavLink to="about">About</NavLink>
    </div>
  );
};

export default NavBar;
