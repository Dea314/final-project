import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";

import React from "react";

function Landing() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Landing</NavLink>
          </li>
          <li>
            <NavLink to="/playground">Playground</NavLink>
          </li>
          <li>
            <NavLink to="/documents">Docs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </div>
  );
}

export default Landing;
