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
          <img className="main-logo" src={logo} alt="logo" width={250} />
          <NavLink
            to="/"
            // variant="h2"
            // noWrap
            // component="div"
            // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            // style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>

          <NavLink
            to="/playground"
            // variant="h5"
            // noWrap
            // component="div"
            // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            // style={{ textDecoration: "none" }}
          >
            Playground
          </NavLink>

          <NavLink
            to="/documents"
            // variant="h5"
            // noWrap
            // component="div"
            // sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            // style={{ textDecoration: "none" }}
          >
            Documents
          </NavLink>

          <NavLink
            to="/about"
            // variant="h5"
            // noWrap
            // component="div"
            // sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            // style={{ textDecoration: "none" }}
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
