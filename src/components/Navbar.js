import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, CssBaseline } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar disableGutters>
          <NavLink
            to="/"
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            m={2}
            pr={1}
          >
            Home
          </NavLink>

          <NavLink
            to="/playground"
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Playground
          </NavLink>

          <NavLink
            to="/documents"
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Documents
          </NavLink>

          <NavLink
            to="/about"
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
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
