import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, CssBaseline } from "@mui/material";
import logo from "../img/logo.gif";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <CssBaseline />

        <Toolbar className="toolbar" disableGutters>
          <img className="main-logo" src={logo} alt="logo" width={270} />
          <NavLink
            className="navlink"
            activeclassname="active"
            to="/"
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Home
          </NavLink>

          <NavLink
            className="navlink"
            activeclassname="active"
            to="/playground"
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Playground
          </NavLink>

          <NavLink
            className="navlink"
            activeclassname="active"
            to="/documents"
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Documents
          </NavLink>

          <NavLink
            className="navlink"
            activeclassname="active"
            to="/about"
            sx={{ display: { xs: "flex", md: "none" } }}
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            About
          </NavLink>
        </Toolbar>
      </AppBar>
      <div>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
